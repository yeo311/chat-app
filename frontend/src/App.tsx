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
        <div className="container">
          <Chatting />
          <TextInputBox />
        </div>
      </ChatProvider>
    </WebSocketProvider>
  );
};

export default App;
