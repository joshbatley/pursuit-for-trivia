import React from 'react';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Answer from 'components/Answer';
import Grid from 'components/Grid';
import Flex from 'components/Flex';
import Button from 'components/Button';

// interface GameManager {
//   lives: number;
//   timesUp: () => void;
//   resetGame: () => void;
//   startGame: (mode: string) => void;
//   correct: () => Promise<void>;
//   incorrect: () => Promise<void>;
// }

const GameScene: React.FC = () => {
  // let { lives, score, answers, timeUp, question, questionNo, submit }
  // let { params } = match;
  let question = 'Which artist composed the original soundtrack for “Watch Dogs 2“?';

  // let startGame = async (): Promise<void> => {
  //    fire start event stasrt
  // };

  // let loseLife = (): void => setLives(lives - 1);
  // let resetLife = (): void => setLives(maxLives);

  // let resetGame = (): void => {
  //   resetLife();
  // };

  // let timesUp = async (): Promise<void> => {
  //   loseLife();
  //   // Times up animation
  //   // reveal answers
  //   // next question
  // };

  // let correct = async (): Promise<void> => {
  //   // Fire confetti
  //   // reveal answers
  //   // next question
  // };

  // let incorrect = async (): Promise<void> => {
  //   loseLife();
  //   // Dunce animation
  //   // reveal answers
  //   // next question
  // };

  // startGame(params.mode);
  return (
    <>
      <Header lives={3} score={0} />
      <Grid gutter="75px 25px 0" template="35% 40% 20%">
        <Flex style={{ alignSelf: 'self-start' }}>
          <Heading>QUESTION 1</Heading>
          <Text size="24px">{question}</Text>
        </Flex>
        <Flex>
          <Answer text="asddas" id="1" />
          <Answer text="asddas" id="2" />
          <Answer text="asddas" id="3" />
          <Answer text="asddas" id="4" />
        </Flex>
        <Button>Submit</Button>
      </Grid>
    </>
  );
};

export default GameScene;
