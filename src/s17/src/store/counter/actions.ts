import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(`${baseUrl}/todos`);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data
    });
  };
};

export const incrementCount = () => ({
  type: ActionTypes.INCREMENT_COUNT
});

export const decrementCount = () => ({
  type: ActionTypes.DECREMENT_COUNT
});
