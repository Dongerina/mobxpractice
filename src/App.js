import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Store from './store/TodoStore';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoList store={Store} />
      </div>
    );
  }
}

export default App;
