import React, { useState, createContext } from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export interface EventManager {
  current: string | null;
  sendEvent: React.Dispatch<string>;
}

export const EventManagerCtx = createContext<EventManager | void>(undefined);

export const EventManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [current, sendEvent] = useState(null as string | null);

  return (
    <EventManagerCtx.Provider value={{ current, sendEvent }}>
      {children}
    </EventManagerCtx.Provider>
  );
};
