import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should create the app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App message="there" />, div);
});
