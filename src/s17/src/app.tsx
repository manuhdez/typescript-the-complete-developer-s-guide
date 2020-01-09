import React from 'react';
import Counter from './components/Counter';

interface AppProps {
  name?: string;
}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <h3>hello {this.props.name || 'invited'}</h3>
        <Counter />
      </div>
    );
  }
}
