import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Title from 'components/Title';

const Start: React.FC = () => (
  <section>
    <Title>Pursuit for Trivia</Title>
    <Link to="/mode-selector" style={{ gridRowStart: 3 }}>
      <Button>Start</Button>
    </Link>
  </section>
);

export default Start;
