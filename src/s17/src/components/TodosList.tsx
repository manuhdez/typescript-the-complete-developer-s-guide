import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../store/reducer';
import { Todo } from '../store/todos/actions';

interface TodosListProps {
  todos: Todo[];
}

const TodosList = ({ todos }: TodosListProps) => {
  return (
    <div>
      <h3>List of todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): TodosListProps => ({
  todos: todos.todos
});

export default connect(mapStateToProps)(TodosList);
