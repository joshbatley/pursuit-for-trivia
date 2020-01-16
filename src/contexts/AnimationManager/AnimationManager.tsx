import React, { useState, createContext } from 'react';
import Animatior from 'components/Animatior';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export interface AnimationManager {
  animation: string | null;
  fireAnimation: React.Dispatch<string>;
}

export const AnimationManagerCtx = createContext<AnimationManager | void>(undefined);

export const AnimationManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [animation, fireAnimation] = useState(null as string | null);

  return (
    <AnimationManagerCtx.Provider value={{ animation, fireAnimation }}>
      <Animatior event={animation} />
      {children}
    </AnimationManagerCtx.Provider>
  );
};
