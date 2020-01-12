import { ActionTypes } from './types';
import { Todo } from './actions';

export interface ReducerState {
  count: number;
  todos: Todo[];
  loading: boolean;
  error: boolean;
}

export interface ReducerAction {
  type: string;
  payload?: any;
}

const initialState: ReducerState = {
  count: 2,
  todos: [],
  loading: false,
  error: false
};

const reducer = (state: ReducerState = initialState, action: ReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case ActionTypes.FETCH_TODOS:
      return {
        ...state,
        todos: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
