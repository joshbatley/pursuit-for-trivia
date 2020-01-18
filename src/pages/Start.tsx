import React from 'react';
import { Link } from 'react-router-dom';
import { useGameMachine } from 'machine';

const Start: React.FC = () => {
  let [current, send] = useGameMachine();

  console.log(current.toStrings());

  return (
    <>
      <h1>Pursuit for Trivia</h1>
      <button type="button" onClick={() => send('START')}>start </button>
      <Link to="/mode-selector">Start</Link>
    </>
  );
};

export default Start;
