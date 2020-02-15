import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Logo from 'components/Logo';

const Start: React.FC = () => (
  <section>
    <Logo />
    <Link to="/game" style={{ gridRowStart: 3 }}>
      <Button disabled>Continue</Button>
    </Link>
    <Link to="/mode-selector" style={{ gridRowStart: 3 }}>
      <Button>Start</Button>
    </Link>
  </section>
);

export default Start;
