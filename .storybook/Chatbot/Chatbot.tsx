// Storybook AI Chatbot Custom Element
interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export class AiChatbot extends HTMLElement {
  private isOpen = false;
  private messages: ChatMessage[] = [];
  private inputValue = '';

    connectedCallback() {
      this.style.position = 'fixed';
      this.style.bottom = '20px';
      this.style.right = '20px';
      this.style.zIndex = '9999';
    this.style.fontFamily = 'Open Sans, system-ui, sans-serif';
    
    this.render();
    this.setupEventListeners();
  }

  private toggleChat = () => {
    this.isOpen = !this.isOpen;
    this.updateChatWindow();
  };

  private closeChat = () => {
    this.isOpen = false;
    this.updateChatWindow();
  };

  private handleInputChange = (event: Event) => {
    const input = this.querySelector('#chat-input') as any; // modus-wc-text-input
    this.inputValue = input?.value || '';
    
    // Update send button state
    this.updateSendButton();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  };

  private sendMessage = () => {
    // Get current value from input
    const input = this.querySelector('#chat-input') as any;
    const currentValue = input?.value || this.inputValue;
    
    if (!currentValue.trim()) {
      return;
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: currentValue,
      isUser: true,
      timestamp: new Date(),
    };

    this.messages = [...this.messages, userMessage];
    this.inputValue = '';
    
    // Clear input and update UI
    if (input) {
      input.value = '';
    }
    
    this.updateSendButton();
    this.renderMessages();
    this.scrollToBottom();

    // Send message to n8n backend
    this.sendToN8N(currentValue);
  };

  private sendToN8N = async (message: string) => {
    const payload = {
      message: message,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId(),
      source: 'modus-storybook-chat'
    };

    // Try proxy server first (for development)
    try {
      const proxyResponse = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Handle both successful (200) and error (500) responses from proxy
      if (proxyResponse.status === 200) {
        const data = await proxyResponse.json();
        
        // Check if it's a fallback response from proxy server
        if (data.fallback || (data.error && data.error.includes('Unknown operation'))) {
          console.log('n8n workflow issue, using mock responses');
          this.addMockAIResponse(message);
          return;
        }
        
        // Check if n8n just echoed back the input (no real AI response)
        if (data.message === message || (!data.response && !data.output && data.message)) {
          console.log('n8n echoed input, using mock responses');
          this.addMockAIResponse(message);
          return;
        }
        
        // Add AI response with streaming effect
        const aiResponseText = data.response || data.output || data.message || "I received your message but couldn't generate a response.";
        this.addStreamingAIResponse(aiResponseText);
        return;
      } else if (proxyResponse.status === 500) {
        // 500 error from proxy (n8n workflow issue), use fallback
        console.log('Proxy returned 500 (n8n workflow issue), using mock responses');
        this.addMockAIResponse(message);
        return;
      } else {
        // Other error status from proxy, use fallback
        console.log(`Proxy returned ${proxyResponse.status}, using mock responses`);
        this.addMockAIResponse(message);
        return;
      }
    } catch (proxyError) {
      console.log('Proxy server not available, trying direct connection...');
    }

    // Try direct connection (for production)
    try {
      const response = await fetch('https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/13c9af66-ae24-4a28-8bd7-589637f05b23/modus-chat/chat', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        
        // Add AI response with streaming effect
        const aiResponseText = data.response || data.message || data.output || "I received your message but couldn't generate a response.";
        this.addStreamingAIResponse(aiResponseText);
        return;
      }
    } catch (corsError) {
      console.log('Direct connection blocked by CORS, using mock responses');
    }

    // Fallback to mock responses
    this.addMockAIResponse(message);
  };

  private addMockAIResponse = (userMessage: string) => {
    // Mock AI responses for development when backend is not accessible
    const mockResponses = this.generateMockResponse(userMessage);
    
    setTimeout(() => {
      this.addStreamingAIResponse(mockResponses);
    }, 500); // Simulate network delay
  };

  private addStreamingAIResponse = (fullText: string) => {
    // Add typing indicator first
    this.addTypingIndicator();

    // Wait a bit, then start streaming the response
    setTimeout(() => {
      this.removeTypingIndicator();
      this.startTextStreaming(fullText);
    }, 800);
  };

  private addTypingIndicator = () => {
    const typingMessage: ChatMessage = {
      id: 'typing-indicator',
      content: '●●●',
      isUser: false,
      timestamp: new Date(),
    };

    this.messages = [...this.messages, typingMessage];
    this.renderMessages();
    this.scrollToBottom();
  };

  private removeTypingIndicator = () => {
    this.messages = this.messages.filter(msg => msg.id !== 'typing-indicator');
    this.renderMessages();
  };

  private startTextStreaming = (fullText: string) => {
    const messageId = (Date.now() + 1).toString();
    
    // Add empty message that we'll populate
    const streamingMessage: ChatMessage = {
      id: messageId,
      content: '',
      isUser: false,
      timestamp: new Date(),
    };

    this.messages = [...this.messages, streamingMessage];
    this.streamingMessageIds.add(messageId);
    this.renderMessages();

    // Split text into chunks (words or small phrases)
    const chunks = this.splitIntoChunks(fullText);
    let currentIndex = 0;

    const streamInterval = setInterval(() => {
      if (currentIndex >= chunks.length) {
        clearInterval(streamInterval);
        this.streamingMessageIds.delete(messageId);
        this.renderMessages(); // Re-render to remove cursor
        
        // Apply syntax highlighting after streaming is complete
        setTimeout(() => {
          this.applySyntaxHighlighting();
        }, 100);
        return;
      }

      // Update the message content
      const messageIndex = this.messages.findIndex(msg => msg.id === messageId);
      if (messageIndex !== -1) {
        this.messages[messageIndex].content += chunks[currentIndex];
        this.renderMessages();
        this.scrollToBottom();
      }

      currentIndex++;
    }, 60); // Slightly slower for better readability
  };

  private splitIntoChunks = (text: string): string[] => {
    // Split by words but keep some punctuation together
    const words = text.split(' ');
    const chunks: string[] = [];
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      // Add space before word (except first word)
      const chunk = i === 0 ? word : ' ' + word;
      
      // For longer words or code blocks, split them further
      if (word.length > 15 && !word.includes('`')) {
        // Split long words into smaller chunks
        const subChunks = word.match(/.{1,8}/g) || [word];
        chunks.push(i === 0 ? subChunks[0] : ' ' + subChunks[0]);
        for (let j = 1; j < subChunks.length; j++) {
          chunks.push(subChunks[j]);
        }
      } else {
        chunks.push(chunk);
      }
    }
    
    return chunks;
  };

  private generateMockResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Context-aware mock responses for Modus Web Components
    if (message.includes('button')) {
      return "I can help you with Modus buttons! The modus-wc-button component supports various styles like 'fill', 'outline', and 'borderless'. You can also set different colors like 'primary', 'secondary', and shapes like 'circle'. Would you like to know more about button properties?";
    }
    
    if (message.includes('input') || message.includes('text')) {
      return "For text inputs, we have modus-wc-text-input which supports various properties like placeholder, disabled state, and validation. It's fully accessible and follows our design system. What specific aspect of text inputs would you like to learn about?";
    }
    
    if (message.includes('card')) {
      return "The modus-wc-card component is great for containing content! It provides a clean, elevated surface with proper spacing and shadows. You can use it to group related information together. Are you looking for specific card styling options?";
    }
    
    if (message.includes('icon')) {
      return "Modus Web Components include a comprehensive icon library! You can use modus-wc-icon with various icon names. The icons are scalable and follow our design system. Which specific icon are you looking for?";
    }
    
    if (message.includes('theme') || message.includes('color')) {
      return "Modus supports multiple themes including light, dark, and custom themes! You can use CSS variables like --modus-wc-color-primary to customize colors. The theme system ensures consistency across all components.";
    }
    
    if (message.includes('accessibility') || message.includes('a11y')) {
      return "All Modus Web Components are built with accessibility in mind! They include proper ARIA attributes, keyboard navigation, and screen reader support. Each component follows WCAG 2.2 guidelines.";
    }
    
    if (message.includes('storybook')) {
      return "You're currently using Storybook to explore Modus Web Components! Each component has interactive examples, documentation, and controls to test different properties. Navigate through the sidebar to explore all available components.";
    }
    
    // Default responses
    const defaultResponses = [
      "I'm here to help you with Modus Web Components! You can ask me about buttons, inputs, cards, icons, theming, accessibility, or any other component. What would you like to know?",
      "Thanks for your question about Modus Web Components! I can provide information about component properties, usage examples, and best practices. What specific component are you working with?",
      "I'd be happy to help you with the Modus Web Components library! Whether you need help with implementation, styling, or accessibility, I'm here to assist. What can I help you with today?",
      "Great question! The Modus Web Components library offers a comprehensive set of UI components. You can explore them in this Storybook or ask me specific questions about implementation. What would you like to learn about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  private getSessionId = (): string => {
    // Get or create a session ID for this chat session
    let sessionId = sessionStorage.getItem('modus-chat-session-id');
    if (!sessionId) {
      sessionId = 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('modus-chat-session-id', sessionId);
    }
    return sessionId;
  };

  private createChatMessage = (message: ChatMessage): HTMLDivElement => {
    const chatDiv = document.createElement('div');
    chatDiv.className = message.isUser ? 'chat chat-end' : 'chat chat-start';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'chat-image avatar';

    const avatarDiv = document.createElement('div');
    avatarDiv.className = `chat-avatar ${message.isUser ? 'bg-primary' : 'bg-secondary'} w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-primary-content`;
    if (!message.isUser) {
      avatarDiv.classList.add('text-secondary-content');
    }
    avatarDiv.textContent = message.isUser ? 'U' : 'AI';
    imageWrapper.appendChild(avatarDiv);

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = message.isUser 
      ? 'chat-bubble chat-bubble-primary' 
      : 'chat-bubble chat-bubble-secondary';
    
    // Handle special cases
    if (message.id === 'typing-indicator') {
      bubbleDiv.innerHTML = '<span class="typing-indicator">●●●</span>';
    } else {
      // Format the content (preserve line breaks, code blocks, etc.)
      bubbleDiv.innerHTML = this.formatMessageContent(message.content);
      
      // Add blinking cursor for streaming messages
      if (this.isMessageStreaming(message.id)) {
        bubbleDiv.innerHTML += '<span class="streaming-cursor"></span>';
      }
    }

    chatDiv.appendChild(imageWrapper);
    chatDiv.appendChild(bubbleDiv);

    return chatDiv;
  };

  private formatMessageContent = (content: string): string => {
    // Format the content to handle markdown-like formatting
    let formatted = content;
    
    // Format code blocks with language detection (```language\ncode```)
    formatted = formatted.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, language, code) => {
      const lang = language || 'javascript'; // Default to JavaScript
      const escapedCode = this.escapeHtml(code.trim());
      return `<pre class="code-block language-${lang}" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 12px; margin: 8px 0; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px; line-height: 1.4; overflow-x: auto; white-space: pre;"><code class="language-${lang}">${escapedCode}</code></pre>`;
    });
    
    // Format code blocks without language (```code```)
    formatted = formatted.replace(/```([\s\S]*?)```/g, (match, code) => {
      const escapedCode = this.escapeHtml(code.trim());
      return `<pre class="code-block" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 12px; margin: 8px 0; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px; line-height: 1.4; overflow-x: auto; white-space: pre;"><code>${escapedCode}</code></pre>`;
    });
    
    // Format inline code (`code`)
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background: #f1f3f4; padding: 2px 6px; border-radius: 4px; font-family: \'Consolas\', \'Monaco\', \'Courier New\', monospace; font-size: 0.9em; color: #d63384; display: inline; width: auto;">$1</code>');
    
    // Format bold text (**text**)
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Format headers (### Header)
    formatted = formatted.replace(/^### (.*$)/gm, '<h4 style="font-size: 1em; font-weight: 600; margin: 12px 0 6px 0; color: #374151;">$1</h4>');
    formatted = formatted.replace(/^## (.*$)/gm, '<h3 style="font-size: 1.1em; font-weight: 600; margin: 14px 0 8px 0; color: #374151;">$1</h3>');
    
    // Format numbered lists
    formatted = formatted.replace(/^\d+\.\s+(.*)$/gm, '<div class="inline-list-item" style="margin: 4px 0; padding-left: 16px; display: inline-flex; gap: 8px; align-items: flex-start; width: fit-content;">•<span>$1</span></div>');
    
    // Format bullet lists
    formatted = formatted.replace(/^\*\s+(.*)$/gm, '<div class="inline-list-item" style="margin: 4px 0; padding-left: 16px; display: inline-flex; gap: 8px; align-items: flex-start; width: fit-content;">•<span>$1</span></div>');
    
    // Format tables
    formatted = this.formatTables(formatted);
    
    // Format links [text](url)
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color: #0066cc; text-decoration: underline;">$1</a>');
    
    // Convert line breaks (but preserve those in code blocks and tables)
    formatted = formatted.replace(/\n(?![^<]*<\/(pre|table)>)/g, '<br>');
    
    return formatted;
  };

  private escapeHtml = (text: string): string => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  private formatTables = (text: string): string => {
    // Match markdown tables
    const tableRegex = /(\|.*\|[\r\n]+\|[-:\s|]*\|[\r\n]+((\|.*\|[\r\n]*)+))/gm;
    
    return text.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n');
      if (lines.length < 3) return match; // Need at least header, separator, and one row
      
      const headerLine = lines[0];
      const separatorLine = lines[1];
      const dataLines = lines.slice(2);
      
      // Parse header
      const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
      
      // Parse alignment from separator line
      const alignments = separatorLine.split('|').map(sep => {
        const trimmed = sep.trim();
        if (trimmed.startsWith(':') && trimmed.endsWith(':')) return 'center';
        if (trimmed.endsWith(':')) return 'right';
        return 'left';
      }).filter((_, i) => i > 0 && i <= headers.length);
      
      // Parse data rows
      const rows = dataLines.map(line => 
        line.split('|').map(cell => cell.trim()).filter(cell => cell)
      ).filter(row => row.length > 0);
      
      // Generate HTML table
      let tableHtml = `
        <table style="
          border-collapse: collapse; 
          width: 100%; 
          margin: 12px 0; 
          font-size: 13px;
          border: 1px solid #e1e5e9;
          border-radius: 6px;
          overflow: hidden;
        ">
          <thead style="background: #f6f8fa;">
            <tr>`;
      
      headers.forEach((header, i) => {
        const align = alignments[i] || 'left';
        tableHtml += `
          <th style="
            padding: 8px 12px; 
            text-align: ${align}; 
            font-weight: 600; 
            border-bottom: 2px solid #e1e5e9;
            color: #24292f;
          ">${header}</th>`;
      });
      
      tableHtml += `
            </tr>
          </thead>
          <tbody>`;
      
      rows.forEach(row => {
        tableHtml += '<tr>';
        row.forEach((cell, i) => {
          const align = alignments[i] || 'left';
          tableHtml += `
            <td style="
              padding: 8px 12px; 
              text-align: ${align}; 
              border-bottom: 1px solid #e1e5e9;
              color: #24292f;
            ">${cell}</td>`;
        });
        tableHtml += '</tr>';
      });
      
      tableHtml += `
          </tbody>
        </table>`;
      
      return tableHtml;
    });
  };

  private streamingMessageIds = new Set<string>();

  private isMessageStreaming = (messageId: string): boolean => {
    return this.streamingMessageIds.has(messageId);
  };

  private applySyntaxHighlighting = () => {
    // Apply Prism.js syntax highlighting to all code blocks
    if (typeof window !== 'undefined' && (window as any).Prism) {
      const codeBlocks = this.querySelectorAll('pre code[class*="language-"]');
      codeBlocks.forEach((block) => {
        (window as any).Prism.highlightElement(block);
      });
    }
  };

  private renderMessages = () => {
    const chatBody = this.querySelector('.chat-body');
    const welcomeMessage = this.querySelector('.welcome-message');
    const messagesContainer = this.querySelector('.chat-messages');
    
    if (chatBody && messagesContainer) {
      if (this.messages.length === 0) {
        // Show welcome message, hide chat messages
        if (welcomeMessage) welcomeMessage.style.display = 'block';
        messagesContainer.innerHTML = '';
        messagesContainer.style.display = 'none';
      } else {
        // Hide welcome message, show chat messages
        if (welcomeMessage) welcomeMessage.style.display = 'none';
        messagesContainer.style.display = 'flex';
        messagesContainer.innerHTML = '';
        this.messages.forEach(message => {
          messagesContainer.appendChild(this.createChatMessage(message));
        });
      }
    }
  };

  private updateChatWindow = () => {
    const chatWindow = this.querySelector('.chat-window');
    if (chatWindow) {
      if (this.isOpen) {
        chatWindow.classList.add('open');
        setTimeout(() => {
          const input = this.querySelector('#chat-input') as HTMLTextAreaElement;
          input?.focus();
        }, 200);
      } else {
        chatWindow.classList.remove('open');
      }
    }
  };

  private updateSendButton = () => {
    const sendBtn = this.querySelector('#send-btn') as any; // modus-wc-button
    if (sendBtn) {
      sendBtn.disabled = !this.inputValue.trim();
    }
  };

  private scrollToBottom = () => {
    const chatBody = this.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  private render() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
      <style>
        :host {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          font-family: 'Open Sans', system-ui, sans-serif;
        }

        .chat-container {
          position: relative;
        }
        
        
        .chat-window {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: var(--modus-wc-color-base-100);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          transform: scale(0.95) translateY(10px);
          opacity: 0;
          transition: all 0.2s ease-out;
          pointer-events: none;
          z-index: 10000;
        }

        .chat-window.open {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--modus-wc-color-base-300);
          border-radius: 12px 12px 0 0;
          background: var(--modus-wc-color-base-100);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }


        .chat-title {
          font-weight: 600;
          font-size: 16px;
          color: var(--modus-wc-color-base-content-low-contrast);
          margin: 0;
        }

        .chat-subtitle {
          font-size: 12px;
          color: #6b7280;
          margin: 2px 0 0 0;
        }

        .chat-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 350px;
          min-height: 200px;
        }

        .welcome-message {
          background: #f3f4f6;
          padding: 16px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }

        .welcome-title {
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
          font-size: 14px;
        }

        .welcome-text {
          color: #6b7280;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        .chat-input-area {
          padding: 12px 10px;
          border-top: 1px solid var(--modus-wc-color-base-300);
          border-radius: 0 0 12px 12px;
        }

        .chat-messages {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Chat Layout leveraging DaisyUI defaults */
        .chat {
          display: flex;
          width: 100%;
          gap: 12px;
          margin-bottom: 16px;
        }

        .chat.chat-start {
          flex-direction: row;
          justify-content: flex-start;
        }

        .chat.chat-end {
          flex-direction: row-reverse;
          justify-content: flex-start;
        }

        .chat-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-avatar {
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        .chat-bubble {
          max-width: min(var(--chat-bubble-max, 360px), calc(100% - 60px));
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.5;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          box-sizing: border-box;
        }

        /* Code block styling within chat bubbles */
        .chat-bubble pre {
          display: inline-block;
          width: max-content;
          max-width: min(var(--chat-code-max, 220px), 100%);
          overflow-x: auto;
          margin: 8px 0;
          font-size: 12px;
          border-radius: 6px;
        }

        .chat-bubble pre code {
          display: inline-block;
          white-space: pre;
          min-width: 0;
          max-width: 100%;
        }

        /* Inline code (not in pre blocks) */
        .chat-bubble code:not(pre code) {
          display: inline;
          width: auto;
          max-width: none;
          word-break: normal;
        }

        /* Table styling within chat bubbles */
        .chat-bubble table {
          display: block;
          width: 100%;
          max-width: var(--chat-code-max, 220px);
          overflow-x: auto;
          white-space: nowrap;
        }

        .chat-bubble table thead,
        .chat-bubble table tbody,
        .chat-bubble table tr {
          width: 100%;
          table-layout: auto;
        }

        /* Custom scrollbar for chat body */
        .chat-body::-webkit-scrollbar {
          width: 6px;
        }

        .chat-body::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .chat-body::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .chat-body::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }

        .chat-bubble-primary {
          background-color: #0063a3;
          color: white;
        }

        .chat-bubble-secondary {
          background-color: #e5e7eb;
          color: #1f2937;
        }

        .bg-primary {
          background-color: #0063a3;
          color: white;
        }

        .bg-secondary {
          background-color: #f59e0b;
          color: white;
        }

        /* Utility Classes for Avatar */
        .avatar {
          position: relative;
          display: inline-flex;
        }

        .w-10 {
          width: 2.5rem;
        }

        .h-10 {
          height: 2.5rem;
        }

        .rounded-full {
          border-radius: 9999px;
        }

        .flex {
          display: flex;
        }

        .items-center {
          align-items: center;
        }

        .justify-center {
          justify-content: center;
        }

        .text-sm {
          font-size: 0.875rem;
        }

        .font-semibold {
          font-weight: 600;
        }

        .text-xs {
          font-size: 0.75rem;
        }

        .opacity-50 {
          opacity: 0.5;
        }

        .text-primary-content {
          color: white;
        }

        .text-secondary-content {
          color: white;
        }

        /* Chat Header for Timestamps */
        .chat-header {
          font-size: 0.75rem;
          opacity: 0.5;
          color: #6b7280;
          margin-bottom: 4px;
        }

        /* Typing Indicator Animation */
        .typing-indicator {
          display: inline-block;
          animation: typing 1.4s infinite ease-in-out;
        }

        @keyframes typing {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        /* Streaming Text Cursor */
        .streaming-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: currentColor;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .chat-input-container {
          display: flex;
          gap: 8px;
          align-items: center;
        }

      </style>
      
      <div class="chat-container">
        <modus-wc-button 
          class="chat-trigger"
          button-style="fill" 
          color="primary" 
          shape="circle" 
          size="large"
          aria-label="Open AI Assistant">
          <modus-wc-icon name="chat"></modus-wc-icon>
        </modus-wc-button>
        
        <div class="chat-window">
          <div class="chat-header">
            <div>
              <h3 class="chat-title">AI Assistant</h3>
            </div>
            <modus-wc-button size="xs" color="tertiary" class="close-btn" shape="circle" variant="borderless" aria-label="Close chat">
              <modus-wc-icon name="close"></modus-wc-icon>
            </modus-wc-button>
          </div>
          
          <div class="chat-body">
            <div class="welcome-message">
              <h4 class="welcome-title">👋 Welcome!</h4>
              <p class="welcome-text">
                I'm your AI assistant for the Modus Web Components library. 
                I can help you with component documentation, usage examples, and best practices.
              </p>
            </div>
            <div class="chat-messages"></div>
          </div>
          
          <div class="chat-input-area">
            <div class="chat-input-container">
              <modus-wc-text-input 
                id="chat-input"
                placeholder="Type your message..."
                style="flex: 1;">
              </modus-wc-text-input>
              <modus-wc-button id="send-btn" button-style="fill" color="primary" shape="circle" size="large" aria-label="Send message" disabled>
                <modus-wc-icon name="paper_plane"></modus-wc-icon>
              </modus-wc-button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.renderMessages();
  };

  private setupEventListeners() {
    const trigger = this.querySelector('.chat-trigger');
    const closeBtn = this.querySelector('.close-btn');
    const input = this.querySelector('#chat-input') as any; // modus-wc-text-input
    const sendBtn = this.querySelector('#send-btn');
    
    trigger?.addEventListener('click', this.toggleChat);
    closeBtn?.addEventListener('click', this.closeChat);
    
    // Set up input events
    if (input) {
      input.addEventListener('valueChange', this.handleInputChange);
      input.addEventListener('input', this.handleInputChange);
      
      // Wait a bit for the component to be fully rendered
      setTimeout(() => {
        const actualInput = input.querySelector('input');
        if (actualInput) {
          actualInput.addEventListener('keydown', this.handleKeyDown);
          actualInput.addEventListener('input', this.handleInputChange);
        }
      }, 100);
      
      // Also try listening on the modus component itself
      input.addEventListener('keydown', this.handleKeyDown);
    }
    
    if (sendBtn) {
      sendBtn.addEventListener('click', this.sendMessage);
    }
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.contains(e.target as Node)) {
        this.closeChat();
      }
    });
  }
}

  customElements.define('ai-chatbot', AiChatbot);
  