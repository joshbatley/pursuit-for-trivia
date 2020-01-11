import { Machine } from 'xstate';

export interface GameStateScheme {
  states: {
    start: {};
    game: {};
    lose: {};
  };
}

export type GameEvent =
  | { type: 'START' }
  | { type: 'CORRECT' }
  | { type: 'INCORRECT' }
  | { type: 'TIMEUP' }
  | { type: 'START' }
  | { type: 'LOSE' }
  | { type: 'READY' }
  | { type: 'RESET' };

const GameMachine = Machine<unknown, GameStateScheme, GameEvent>({
  id: 'game',
  initial: 'start',
  states: {
    start: { on: { START: 'playing' } },
    game: {
      states: {
        playing: {
          CORRECT: 'nextQuestion',
          INCORRECT: 'nextQuestion',
          LOSE: 'lose',
        },
        nextQuestion: {
          on: { READY: 'playing' },
        },
      },
    },
    lose: { on: { RESET: 'game' } },
  },
});

export default GameMachine;
