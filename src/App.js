import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="center">
        <h1>
          Hello, {this.props.message}!
        </h1>
      </div>
    );
  }
}

export default App;
