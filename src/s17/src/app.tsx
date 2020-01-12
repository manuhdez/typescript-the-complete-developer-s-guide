import React from 'react';
import { connect } from 'react-redux';

// components
import Counter from './components/Counter';
import TodosList from './components/TodosList';

// redux
import { Dispatch } from 'redux';
import { fetchTodos } from './store/todos/actions';

interface AppState {}

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
        <TodosList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): AppActions => ({
  getTodos: () => dispatch<any>(fetchTodos())
});

export default connect(null, mapDispatchToProps)(App);
