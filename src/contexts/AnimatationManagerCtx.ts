import React from 'react';

export interface AnimatationManager {
  animator: boolean;
}

const AnimatationManagerCtx = React.createContext<AnimatationManager>({
  animator: false,
});

export default AnimatationManagerCtx;
