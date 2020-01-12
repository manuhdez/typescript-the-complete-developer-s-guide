import { combineReducers } from 'redux';

// reducers
import counterReducer, { CounterReducerState } from './counter/reducer';
import todosReducer, { TodosReducerState } from './todos/reducer';

export interface StoreState {
  counter: CounterReducerState;
  todos: TodosReducerState;
}

export const reducer = combineReducers<StoreState>({
  counter: counterReducer,
  todos: todosReducer
});
