import React, { useContext, useState } from 'react';
import { WebSocketContext } from '../websocket/WebSocketProvider';

export type Chat = {
  name: string;
  msg: string;
};

const Chatting: React.FC = () => {
  const ws = useContext(WebSocketContext);

  const [items, setItems] = useState<Chat[]>([]);

  ws.current.onmessage = (evt: MessageEvent) => {
    const data: Chat = JSON.parse(evt.data);
    setItems([...items, data]);
  };

  return (
    <div className="chat-box">
      <ul id="chat-list">
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.name} {item.msg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chatting;
