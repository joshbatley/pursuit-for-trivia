import React, { useState } from 'react';
import AnimatationManagerCtx from 'contexts/AnimatationManagerCtx';
import Animatior from 'components/Animatior';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const AnimatationManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [animation, fireAnimation] = useState(null as string | null);

  return (
    <AnimatationManagerCtx.Provider value={{ animation, fireAnimation }}>
      <Animatior event={animation} />
      {children}
    </AnimatationManagerCtx.Provider>
  );
};

export default AnimatationManagerProvider;
