import { CounterActionTypes } from './types';

export interface CounterReducerState {
  count: number;
}

export interface ReducerAction {
  type: CounterActionTypes;
}

const initialState: CounterReducerState = {
  count: 0
};

const reducer = (
  state: CounterReducerState = initialState,
  action: ReducerAction
) => {
  const { type } = action;

  switch (type) {
    case CounterActionTypes.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionTypes.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
