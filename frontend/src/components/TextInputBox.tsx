import React, { useContext, useState } from 'react';
import { useChatDispatch, useChatState } from '../context/chatContext';
import { WebSocketContext } from '../websocket/WebSocketProvider';
import { Chat } from './Chatting';

const TextInputBox: React.FC = () => {
  const [msg, setMsg] = useState<string>('');
  const [name, setName] = useState<string>('');
  const state = useChatState();
  const dispatch = useChatDispatch();
  const ws = useContext(WebSocketContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chat: Chat = { name: state.userName, msg };
    ws.current.send(JSON.stringify(chat));
    setMsg('');
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSetName = () => {
    dispatch({ type: 'SET_USERNAME', name: name });
  };

  return (
    <div>
      {state.userName === '' ? (
        <div className="text-input-box">
          <input type="text" value={name} onChange={handleChangeName}></input>
          <button type="button" onClick={handleSetName}>
            Save
          </button>
        </div>
      ) : (
        <div className="text-input-box">
          <input type="text" value={msg} onChange={handleChange}></input>
          <button type="button" onClick={handleSubmit}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default TextInputBox;
