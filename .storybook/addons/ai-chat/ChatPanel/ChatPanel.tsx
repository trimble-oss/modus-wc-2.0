import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  listenToChatUi,
  listenToChatUiEvents,
  CHAT_UI_URLS,
  ContentVariants,
  ChatUiVariants,
  type ChatUiConfiguration,
  type ChatUiEvent,
} from '@trimble-agentic-external-npm-local/agentic-platform-sdk-iframe-typescript';
import { AGENT_ID } from '../constants';
import { getStoredToken, clearStoredToken, openTidLogin } from './auth';
import './ChatPanel.css';

const ENVIRONMENT = 'prod' as const;
const CHAT_UI_URL = CHAT_UI_URLS[ENVIRONMENT];

interface ChatPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  isOpen,
  onToggle,
  onClose,
  theme = 'light',
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [token, setToken] = useState(() => getStoredToken() || '');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const hasToken = token.length > 0;

  const getConfig = useCallback(
    (): ChatUiConfiguration => ({
      environment: ENVIRONMENT,
      agentId: AGENT_ID,
      uiConfig: {
        theme,
        contentVariant: ContentVariants.Chat,
        variant: ChatUiVariants.Minimal,
        chatInput: {
          buttons: [],
          hideModelSelection: true,
        },
      },
      localization: {},
    }),
    [theme]
  );

  const getToken = useCallback(async (): Promise<string> => {
    const stored = getStoredToken();
    if (!stored) {
      // Token expired -- reset to sign-in screen so user can re-authenticate
      clearStoredToken();
      setToken('');
    }
    return stored || '';
  }, []);

  const handleEvent = useCallback((_event: ChatUiEvent) => {
    // Chat UI events are handled silently; add handling here as needed
  }, []);

  const handleSignIn = useCallback(async () => {
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const newToken = await openTidLogin();
      if (newToken) setToken(newToken);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Sign-in failed';
      if (message !== 'Login popup was closed') {
        setLoginError(message);
      }
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const handleSignOut = useCallback(() => {
    clearStoredToken();
    setToken('');
    setLoginError('');
  }, []);

  useEffect(() => {
    if (!isOpen || !iframeRef.current || !hasToken) return;

    const cleanupListener = listenToChatUi(
      iframeRef.current,
      CHAT_UI_URL,
      getConfig,
      getToken
    );

    const cleanupEvents = listenToChatUiEvents(CHAT_UI_URL, handleEvent);

    return () => {
      cleanupListener();
      cleanupEvents();
    };
  }, [isOpen, hasToken, getConfig, getToken, handleEvent]);

  // Focus management and Escape key handling
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div className="chat-fab-container">
        <modus-wc-button
          shape="circle"
          size="lg"
          color="primary"
          variant={'filled'}
          aria-label="Modus Assistant"
          title="Modus Assistant"
          onClick={onToggle}
        >
          <modus-wc-icon
            decorative
            name={isOpen ? 'close' : 'chat'}
            size="md"
          />
        </modus-wc-button>
      </div>

      {isOpen && (
        <div
          className="chat-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-overlay-title"
          tabIndex={-1}
        >
          <div className="chat-header">
            <div className="chat-header-title-group">
              <modus-wc-avatar
                alt="Modus Assistant"
                initials="Modus Assistant"
                size="xs"
                shape="circle"
              />
              <span id="chat-overlay-title" className="chat-header-title">
                Modus Assistant
              </span>
            </div>
            <div className="chat-header-actions">
              {hasToken && (
                <modus-wc-button
                  shape="circle"
                  size="sm"
                  variant="borderless"
                  color="tertiary"
                  aria-label="Sign out"
                  title="Sign out"
                  onClick={handleSignOut}
                >
                  <modus-wc-icon decorative name="sign_out" size="sm" />
                </modus-wc-button>
              )}
              <modus-wc-button
                shape="circle"
                size="sm"
                variant="borderless"
                color="tertiary"
                aria-label="Close"
                title="Close"
                onClick={onClose}
              >
                <modus-wc-icon decorative name="close" size="sm" />
              </modus-wc-button>
            </div>
          </div>

          {hasToken ? (
            <iframe
              ref={iframeRef}
              src={CHAT_UI_URL}
              key={token}
              className="chat-iframe"
              title="Modus Assistant"
              allow="clipboard-write"
            />
          ) : (
            <div className="chat-signin-form">
              <div className="chat-signin-inner">
                <modus-wc-avatar
                  alt="Modus Assistant"
                  initials="Modus Assistant"
                  size="lg"
                  shape="circle"
                />
                <h3 className="chat-signin-title">Modus Assistant</h3>
                {loginError && <p className="chat-error">{loginError}</p>}
                <modus-wc-button
                  color="primary"
                  variant="filled"
                  size="md"
                  full-width
                  disabled={isLoggingIn}
                  aria-label="Sign in with Trimble ID"
                  onClick={handleSignIn}
                >
                  <span>
                    {isLoggingIn ? 'Signing in...' : 'Sign in with Trimble ID'}
                  </span>
                </modus-wc-button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
