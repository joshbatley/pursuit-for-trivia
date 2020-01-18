import React, { useState, createContext, useEffect } from 'react';
import Animatior from 'components/Animatior';
import { useGameMachine } from 'machine';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export interface AnimationManager {
  animation: string | null;
  fireAnimation: React.Dispatch<string>;
}

export const AnimationManagerCtx = createContext<AnimationManager | void>(undefined);

export const AnimationManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [current] = useGameMachine();
  let [animation, fireAnimation] = useState(null as string | null);

  console.log('---', current);

  return (
    <AnimationManagerCtx.Provider value={{ animation, fireAnimation }}>
      <Animatior event={animation} />
      {children}
    </AnimationManagerCtx.Provider>
  );
};
