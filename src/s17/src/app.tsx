import React from 'react';
import { connect } from 'react-redux';

// components
import Counter from './components/Counter';

// redux
import { Dispatch } from 'redux';
import { StoreState } from './store/reducer';
import { fetchTodos, Todo } from './store/todos/actions';

interface AppState {
  todos: Todo[];
}

interface AppActions {
  getTodos: () => Promise<void>;
}

interface AppProps extends AppState, AppActions {}

class App extends React.Component<AppProps> {
  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
  }

  render() {
    return (
      <div>
        <Counter />
        {/* <TodosList todos={todos} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): AppState => ({
  todos: todos.todos
});

const mapDispatchToProps = (dispatch: Dispatch): AppActions => ({
  getTodos: () => dispatch<any>(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
