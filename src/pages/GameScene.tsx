import React, { useState } from 'react';
import useGame from 'hooks/useGame';
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
  let [answer, setAnswer] = useState('');
  let [{
    lives, score, answers, question, questionNo,
  }, {
    timeUp, submit,
  }] = useGame();
  // let { params } = match;

  return (
    <>
      <Header lives={lives} score={score} />
      <Grid gutter="75px 25px 0" template="35% 40% 20%">
        <Flex style={{ alignSelf: 'self-start' }}>
          <Heading>QUESTION {questionNo}</Heading>
          <Text size="24px">{question ?? ''}</Text>
        </Flex>
        <form onSubmit={submit(answer)} id="game">
          <Flex>
            {answers && answers.map((a, i) => (
              <Answer
                text={a.text}
                id={i.toString()}
                key={i}
                onChange={setAnswer}
                isAnswer={a.isAnswer}
              />
            ))}
          </Flex>
        </form>
        <Button type="submit" form="game">Submit</Button>
      </Grid>
    </>
  );
};

export default GameScene;
