import React from 'react';

interface Props {
  event: string | null;
}

const Animatior: React.FC<Props> = ({ event }: Props) => (
  <div>{event}</div>
);

export default Animatior;
