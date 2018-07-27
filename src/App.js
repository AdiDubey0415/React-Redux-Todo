import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/addTodo';
import TodoList from './Components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;


/*

Requirements:

1. Add a todo anywhere in the list(before or after any other todo) with corresponding deadline.
2. Edit a todo.
3. Toggle the Completed State.
4. Delete a todo.
5. Move a todo anywhere in the list.
6. Search a todo is a list.

Components Required(Including Containers):

1. Main app component(already present).
2. Add Todo Component.
3. Todo List Component.

State:

1. List of todos in an array(each todo as an object itself).
2. Currently Typed Todo.

*/