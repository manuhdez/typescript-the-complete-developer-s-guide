import { TodosActionTypes } from './types';
import { Todo } from './actions';

export interface TodosReducerState {
  todos: Todo[];
  loading: boolean;
}

export interface ReducerAction {
  type: TodosActionTypes;
  payload?: any;
}

const initialState: TodosReducerState = {
  todos: [],
  loading: false
};

const reducer = (
  state: TodosReducerState = initialState,
  action: ReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    case TodosActionTypes.FETCH_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case TodosActionTypes.FETCH_TODOS_START:
      return {
        ...state,
        loading: true
      };
    case TodosActionTypes.DELETE_TODO_BY_ID:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
