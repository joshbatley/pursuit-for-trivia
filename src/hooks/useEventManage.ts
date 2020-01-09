import { useMachine } from '@xstate/react';
import gameMachine from 'machines';

const useEventManager = () => useMachine(gameMachine);

export default useEventManager;
