import React from 'react';
import './App.css';
import Chatting from './components/Chatting';
import TextInputBox from './components/TextInputBox';
import { ChatProvider } from './context/chatContext';
import WebSocketProvider from './websocket/WebSocketProvider';

const App: React.FC = () => {
  return (
    <WebSocketProvider>
      <ChatProvider>
        <Chatting />
        <TextInputBox />
      </ChatProvider>
    </WebSocketProvider>
  );
};

export default App;
