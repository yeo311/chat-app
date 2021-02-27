import React, { useContext, useState } from 'react';
import { WebSocketContext } from '../websocket/WebSocketProvider';
import { Chat } from './Chatting';

const TextInputBox: React.FC = () => {
  const [msg, setMsg] = useState<string>('');
  const ws = useContext(WebSocketContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chat: Chat = { name: 'yeo', msg };
    ws.current.send(JSON.stringify(chat));
    setMsg('');
  };

  return (
    <div>
      <input type="text" value={msg} onChange={handleChange}></input>
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default TextInputBox;
