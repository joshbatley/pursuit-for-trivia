import React, { useState, createContext, useContext } from 'react';
import Animatior from 'components/Animatior';

interface Props {
  children?: React.ReactChild;
}

export enum Events {
  'CORRECT',
  'INCORRECT'
}

interface AnimationManager {
  animation: Events | null;
  fireAnimation: React.Dispatch<Events>;
}

export const AnimationManagerCtx = createContext<AnimationManager | void>(undefined);

export function useAnimationManager(): AnimationManager {
  let context = useContext(AnimationManagerCtx);
  if (context === undefined) {
    throw new Error('useAnimationManager must be used within a AnimationManagerProvider');
  }

  return context;
}


export const AnimationManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [animation, setAnimation] = useState<Events | null>(null);

  function fireAnimation(event: Events) {
    setAnimation(event);
    setTimeout(() => {
      setAnimation(null);
    }, 500);
  }

  return (
    <AnimationManagerCtx.Provider value={{ animation, fireAnimation }}>
      <Animatior event={animation} />
      {children}
    </AnimationManagerCtx.Provider>
  );
};
