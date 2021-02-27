import React, { useRef } from 'react';

export const WebSocketContext = React.createContext<any>(null);

export default function WebSocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const webSocketUrl = `ws://localhost:1323/ws`;
  let ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      console.log(`connect to ${webSocketUrl}`);
    };
    ws.current.onclose = (err) => {
      console.log(`disconnect from ${webSocketUrl}`);
      console.log(err);
    };
    ws.current.onerror = (err) => {
      console.log(`connection error ${webSocketUrl}`);
      console.log(err);
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
}
