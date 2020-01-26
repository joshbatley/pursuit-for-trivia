import React, { createContext, useReducer, useContext } from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export enum AllowActions {
  START = 'START',
  RESET = 'RESET',
  QUIT = 'QUIT',
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
  TIMESUP = 'TIMESUP',
  LOSE = 'LOSE'
}

type Actions = { type: AllowActions };

interface State {
  current: string;
  states: {
    [id: string]: {
      on: { [K in AllowActions]?: string };
    };
  };
}

interface EventManager {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

const initialState: State = {
  current: 'menu',
  states: {
    menu: {
      on: {
        [AllowActions.START]: 'game',
      },
    },
    game: {
      on: { [AllowActions.RESET]: 'menu' },
    },
  },
};

export function eventReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case 'START':
      return { ...state, current: 'game' };
    case 'RESET':
      return { ...state, current: 'menu' };
    default:
      throw new Error();
  }
}

export const EventManagerCtx = createContext<EventManager | void>(undefined);

export function useEventManager() {
  let context = useContext(EventManagerCtx);
  if (context === undefined) {
    throw new Error('useEventManager must be used within a EventManaagerProvider');
  }

  return context;
}

export const EventManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [state, dispatch] = useReducer(eventReducer, initialState);

  return (
    <EventManagerCtx.Provider value={{ state, dispatch }}>
      {children}
    </EventManagerCtx.Provider>
  );
};
