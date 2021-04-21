import React, { Component} from 'react';
import './App.css';

class App extends Component {
  render() {

    const name = 'Jane Doe';
  return (
    <div className='App'>
     <h1>Hello {name.toUpperCase()}</h1>
    </div>
  );
  }
}

export default App;
