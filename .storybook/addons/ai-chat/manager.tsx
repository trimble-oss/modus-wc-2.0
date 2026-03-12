import React, { useState } from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';
import { ChatPanel } from './ChatPanel/ChatPanel';

const ChatAddon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Render nothing in the toolbar -- FAB is self-contained in ChatPanel
    <div
      style={{ width: 0, height: 0, overflow: 'visible', position: 'static' }}
    >
      <ChatPanel
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Modus Assistant',
    render: () => <ChatAddon />,
  });
});
