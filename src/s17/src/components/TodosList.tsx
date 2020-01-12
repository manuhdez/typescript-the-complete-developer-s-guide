import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { StoreState } from '../store/reducer';
import { Todo, deleteTodoItem } from '../store/todos/actions';

interface TodosListProps extends StateToProps, DispatchToProps {}

interface StateToProps {
  todos: Todo[];
}

interface DispatchToProps {
  removeTodo(id: number): Action<any>;
}

const TodosList = ({ todos, removeTodo }: TodosListProps) => {
  return (
    <div>
      <h3>List of todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.title}
              <button
                onClick={() => removeTodo(todo.id)}
                style={{ background: 'tomato', color: 'white' }}
              >
                Remove todo
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): StateToProps => ({
  todos: todos.todos
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  removeTodo: (id: number) => dispatch(deleteTodoItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
