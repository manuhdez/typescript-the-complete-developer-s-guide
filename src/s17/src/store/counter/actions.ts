import { CounterActionTypes } from './types';

export const incrementCount = () => ({
  type: CounterActionTypes.INCREMENT_COUNT
});

export const decrementCount = () => ({
  type: CounterActionTypes.DECREMENT_COUNT
});
