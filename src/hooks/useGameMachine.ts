import { useMachine } from '@xstate/react';
import GameMachine from 'machines/GameMachine';

const useGameMachine = () => useMachine(GameMachine);

export default useGameMachine;
