import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as Event from './EventManager';

describe('EventManager', () => {
  test('Provider should render', () => {
    const { container } = render(<Event.EventManagerProvider />);
    expect(container).not.toBeNull();
  });
  test('useEventManager should throw error if no provider found', () => {
    const { result } = renderHook(() => Event.useEventManager());
    expect(result.error.message).toBe('useEventManager must be used within a EventManaagerProvider');
  });

  describe('EventReducer', () => {
    test('START', () => {
      let state = {
        current: 'menu',
        states: {},
      };
      let action = { type: Event.AllowActions.START };
      let res = Event.eventReducer(state, action);
      expect(res).toStrictEqual({
        current: 'game',
        states: {},
      });
    });
    test('RESET', () => {
      let state = {
        current: 'game',
        states: {},
      };
      let action = { type: Event.AllowActions.RESET };
      let res = Event.eventReducer(state, action);
      expect(res).toStrictEqual({
        current: 'menu',
        states: {},
      });
    });
  });
});
