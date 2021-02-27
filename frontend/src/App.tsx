import React from 'react';
import './App.css';
import Chatting from './components/Chatting';
import TextInputBox from './components/TextInputBox';
import WebSocketProvider from './websocket/WebSocketProvider';

const App: React.FC = () => {
  return (
    <WebSocketProvider>
      <Chatting />
      <TextInputBox />
    </WebSocketProvider>
  );
};

export default App;
