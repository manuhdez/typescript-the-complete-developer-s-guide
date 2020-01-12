import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import counterReducer, { CounterReducerState } from './counter/reducer';
import todosReducer, { TodosReducerState } from './todos/reducer';

interface StoreState {
  counter: CounterReducerState;
  todos: TodosReducerState;
}

const reducers = combineReducers<StoreState>({
  counter: counterReducer,
  todos: todosReducer
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
