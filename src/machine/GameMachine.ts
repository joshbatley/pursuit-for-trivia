import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

export interface GameStateScheme {
  states: {
    menu: {};
    game: {
      states: {
        playing: {};
        nextQuestion: {};
      };
    };
    finish: {};
  };
}

export type GameEvent =
  | { type: 'START' }
  | { type: 'CORRECT' }
  | { type: 'INCORRECT' }
  | { type: 'READY' }
  | { type: 'RESET' }
  | { type: 'EXIT' }
  | { type: 'LOSE' }
  | { type: 'DIE' }
  | { type: 'FINISH' };

export const GameMachine = Machine<null, GameStateScheme, GameEvent>({
  id: 'game',
  initial: 'menu',
  states: {
    menu: {
      on: { START: 'game' },
    },
    game: {
      on: { FINISH: 'finish' },
      initial: 'playing',
      states: {
        playing: {
          on: {
            CORRECT: 'nextQuestion',
            INCORRECT: 'nextQuestion',
          },
        },
        nextQuestion: {
          on: { READY: 'playing' },
        },
      },
    },
    finish: {
      on: {
        RESET: 'game',
        EXIT: 'menu',
      },
    },
  },
});

export const useGameMachine = (options?: any) => useMachine(GameMachine, options);
