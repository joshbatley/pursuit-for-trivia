import React, { useState } from 'react';
import useGame from 'hooks/useGame';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Answer from 'components/Answer';
import Grid from 'components/Grid';
import Flex from 'components/Flex';
import Button from 'components/Button';
import Loader from 'components/Loader';

const GameScene: React.FC = () => {
  let [{
    lives, score, answers, question, questionNo, isFetching, selected,
  }, {
    timeUp, submit,
  }] = useGame();

  return (
    <>
      { isFetching ? (<Loader />) : (
        <>
          <Header lives={lives} score={score} />
          <Grid gutter="75px 25px 0" template="35% 40% 20%">
            <Flex style={{ alignSelf: 'self-start' }}>
              <Heading>QUESTION {questionNo + 1}</Heading>
              <Text size="24px">{question ?? ''}</Text>
            </Flex>
            <form onSubmit={submit} id="game">
              <Flex>
                {answers && answers.map((a, i) => (
                  <Answer
                    text={a.text}
                    id={i.toString()}
                    key={i}
                    onChange={a.onChange}
                    isAnswer={a.isAnswer}
                    selected={selected}
                  />
                ))}
              </Flex>
            </form>
            <Button type="submit" form="game" disabled={selected === ''}>Submit</Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default GameScene;
