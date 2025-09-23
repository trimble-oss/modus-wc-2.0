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

    // TODO: Add AI response logic here
    // For now, just add a placeholder response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! I'm a UI shell for now, but soon I'll be able to help you with Modus Web Components questions.",
        isUser: false,
        timestamp: new Date(),
      };
      this.messages = [...this.messages, aiResponse];
      this.renderMessages();
      this.scrollToBottom();
    }, 1000);
  };

  private createChatMessage = (message: ChatMessage): HTMLDivElement => {
    const chatDiv = document.createElement('div');
    chatDiv.className = message.isUser ? 'chat chat-end' : 'chat chat-start';

    const avatarDiv = document.createElement('div');
    avatarDiv.className = message.isUser ? 'chat-image bg-primary' : 'chat-image bg-secondary';
    avatarDiv.textContent = message.isUser ? 'U' : 'AI';

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = message.isUser 
      ? 'chat-bubble chat-bubble-primary' 
      : 'chat-bubble chat-bubble-secondary';
    bubbleDiv.textContent = message.content;

    chatDiv.appendChild(avatarDiv);
    chatDiv.appendChild(bubbleDiv);

    return chatDiv;
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
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
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

        /* Simple Chat Layout */
        .chat {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .chat-start {
          flex-direction: row;
        }

        .chat-end {
          flex-direction: row-reverse;
        }

        .chat-image {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .chat-bubble {
          max-width: 250px;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          word-wrap: break-word;
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
  