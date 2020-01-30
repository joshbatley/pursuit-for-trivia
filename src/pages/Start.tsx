import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const Start: React.FC = () => (
  <>
    <h1>Pursuit for Trivia</h1>
    <Link to="/mode-selector">Start</Link>
    <div className="container">
      <Button>Silver</Button>
      <Button>Silver</Button>
      <Button>Nickel</Button>
      <Button>Oxygen</Button>
    </div>
  </>
);

export default Start;
