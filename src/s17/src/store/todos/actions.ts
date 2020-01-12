import axios from 'axios';
import { Dispatch } from 'redux';
import { TodosActionTypes } from './types';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// FETCH TODOS

interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(`${baseUrl}/todos`);

    dispatch<FetchTodosAction>({
      type: TodosActionTypes.FETCH_TODOS,
      payload: response.data
    });
  };
};

// DELETE TODO

interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO_BY_ID;
  payload: number;
}

export const deleteTodoItem = (id: number): DeleteTodoAction => ({
  type: TodosActionTypes.DELETE_TODO_BY_ID,
  payload: id
});
