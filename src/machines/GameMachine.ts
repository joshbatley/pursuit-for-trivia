import { Machine } from 'xstate';

export interface GameStateScheme {
  states: {
    start: {};
  };
}

export type GameEvent =
 | { type: 'START' };

const GameMachine = Machine<unknown, GameStateScheme, GameEvent>({
  id: 'game',
  initial: 'start',
  states: {
    start: {

    },
  },
});

export default GameMachine;
