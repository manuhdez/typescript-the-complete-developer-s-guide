import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

interface AppProps {
  name?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <h3>hello {this.props.name || 'invited'}</h3>
        <Counter initialValue={11} />
      </div>
    );
  }
}

ReactDOM.render(<App name="Albert" />, document.getElementById('root'));
