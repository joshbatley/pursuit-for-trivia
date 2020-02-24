import React, { useState, createContext, useContext } from 'react';
import Animatior from 'components/Animatior';

interface Props {
  children?: React.ReactChild;
}

interface AnimationManager {
  animation: string | null;
  fireAnimation: React.Dispatch<string>;
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
  let [animation, fireAnimation] = useState<string | null>(null);

  return (
    <AnimationManagerCtx.Provider value={{ animation, fireAnimation }}>
      <Animatior event={animation} />
      {children}
    </AnimationManagerCtx.Provider>
  );
};
