import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  name?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <h3>hello {this.props.name || 'invited'}</h3>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
