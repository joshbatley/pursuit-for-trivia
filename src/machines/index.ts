import { Machine } from 'xstate';

export interface GameStateScheme {
  states: {
    start: {};
  };
}

export type GameEvent =
 | { type: 'START' };

const gameMachine = Machine<unknown, GameStateScheme, GameEvent>({
  id: 'game',
  initial: 'start',
  states: {
    start: {

    },
  },
});

export default gameMachine;
