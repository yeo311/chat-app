import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type State = {
  userName: string;
};

type Action = { type: 'SET_USERNAME'; name: string };

type ChatDispatch = Dispatch<Action>;

const ChatStateContext = createContext<State | null>(null);
const ChatDispatchContext = createContext<ChatDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.name,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    userName: '',
  });

  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
}

export function useChatState() {
  const state = useContext(ChatStateContext);
  if (!state) throw new Error('cannot find provider');
  return state;
}

export function useChatDispatch() {
  const dispatch = useContext(ChatDispatchContext);
  if (!dispatch) throw new Error('cannot find provider');
  return dispatch;
}
