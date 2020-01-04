import React from 'react';
import AnimatationManagerCtx from 'contexts/AnimatationManagerCtx';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const AnimatationManagerProvider: React.FC<Props> = ({ children }: Props) => (
  <AnimatationManagerCtx.Provider value={{ animator: false }}>
    {children}
  </AnimatationManagerCtx.Provider>
);


export default AnimatationManagerProvider;
