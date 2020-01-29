import React from 'react';
import { Link } from 'react-router-dom';
import AnswerBox from 'components/AnswerBox';

const Start: React.FC = () => (
  <>
    <h1>Pursuit for Trivia</h1>
    <Link to="/mode-selector">Start</Link>
    <div className="container">
      <AnswerBox answer="Silver" />
      <AnswerBox answer="Silver" />
      <AnswerBox answer="Nickel" />
      <AnswerBox answer="Oxygen" />
    </div>
  </>
);

export default Start;
