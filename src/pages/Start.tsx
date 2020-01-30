import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const Start: React.FC = () => (
  <section>
    <h1>Pursuit for Trivia</h1>
    <Link to="/mode-selector" style={{ gridRowStart: 3 }}>
      <Button>Start</Button>
    </Link>
  </section>
);

export default Start;
