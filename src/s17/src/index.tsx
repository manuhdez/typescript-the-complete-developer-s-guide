import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  name?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    counter: 0
  };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h3>hello {this.props.name || 'invited'}</h3>
        <p>count: {this.state.counter}</p>
        <button onClick={this.onIncrement}>increment</button>
        <button onClick={this.onDecrement}>decrement</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
