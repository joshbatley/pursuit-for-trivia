import React, { useState } from 'react';
import GameManagerCtx from 'contexts/GameManagerCtx';
import useQuestionManager from 'hooks/useQuestionManager';
import config from 'config';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const { maxLives } = config.mode.normal;

  const { nextQuestion, fetch } = useQuestionManager();

  const [lives, setLives] = useState(maxLives);

  // const nextQuestion = () => console.log('res');
  const stopTimer = () => console.log('res');
  const startTimer = () => console.log('res1');

  const startGame = async (): Promise<void> => {
    await fetch();
    startTimer();
  };

  const loseLife = (): void => setLives(lives - 1);
  const resetLife = (): void => setLives(maxLives);

  const resetGame = (): void => {
    resetLife();
    startTimer();
  };

  // const timesUp = async (): Promise<void> => {
  //   loseLife();
  //   stopTimer();
  //   // Times up animation
  //   await nextQuestion(); // Reveal(correct answer), next questin
  //   console.log('time up');
  //   startTimer();
  // };

  const correct = async (): Promise<void> => {
    stopTimer();
    // Fire confetti
    await nextQuestion(); // Reveal(nothing), next question
    startTimer();
  };

  const incorrect = async (): Promise<void> => {
    stopTimer();
    loseLife();
    // Dunce animation
    await nextQuestion(); // Reveal(correct answer), next question
    startTimer();
  };

  const values = {
    lives: 0,
    startGame,
    resetGame,
    correct,
    incorrect,
  };

  return (
    <GameManagerCtx.Provider value={values}>
      {children}
    </GameManagerCtx.Provider>
  );
};

export default GameManagerProvider;
