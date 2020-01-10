import React from 'react';

export interface AnimatationManager {
  animation: string | null;
  fireAnimation: React.Dispatch<any>;
}

const AnimatationManagerCtx = React.createContext<AnimatationManager>({
  animation: null,
  fireAnimation: () => {},
});

export default AnimatationManagerCtx;
