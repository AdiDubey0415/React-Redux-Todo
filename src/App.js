import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTodo from './Containers/AddTodo';
import TodoList from './Containers/TodoList';
import SearchTodo from './Containers/SearchTodo';
import { changeCurrentValue, addTodoToTodos, editTodo, deleteTodo, toggleTodo, searchTodo, searchTodoInList, searchByDeadline, searchTodoInListByDeadline, setTodoPlacement, setTodoPosition } from './Action_Creators/index';

class App extends Component {

  deleteTodo = (index) => {
    this.props.deleteTodo(index);
  }

  editTodo = (index) => {
    this.props.editTodo(index);
  }

  handleValueChange = (event, type) => {
    this.props.changeCurrentValue(event.target.value, type);
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.searchTodo(event.target.value);
  }

  handleSearchByDeadline = (event) => {
    event.preventDefault();
    this.props.searchByDeadline(event.target.value);
  }

  handleSearchTodo = (event) => {
    event.preventDefault();
    this.props.searchTodoInList();
  }

  handleSearchTodoByDeadline = (event) => {
    event.preventDefault();
    this.props.searchTodoInListByDeadline();
  }

  saveTodo = (event) => {
    event.preventDefault();
    this.props.addTodoToTodos();
  }
// b5f9d9gy
  render() {
    return (
      <div className="App">

        <header className="header-class">
          Find what you're looking for...
        </header>

        <AddTodo appState={this.props.appState}
        handleValueChange={(event, type) => this.handleValueChange(event, type)}  
        saveTodo={(event) => this.saveTodo(event)}
        setTodoPosition={this.props.setTodoPosition}
        setTodoPlacement={this.props.setTodoPlacement}/>

        <SearchTodo appState={this.props.appState} 
        handleSearch={(event) => this.props.searchTodo(event.target.value)} 
        handleSearchTodo={(event) => this.handleSearchTodo(event)}
        handleSearchTodoByDeadline={(event) => this.handleSearchTodoByDeadline(event)} 
        handleSearchByDeadline={(event) => this.handleSearchByDeadline(event)}/>
        
        <TodoList appState={this.props.appState}
        todos={this.props.appState.todos} 
        editTodo={(index) => this.editTodo(index)} 
        deleteTodo={(index) => this.deleteTodo(index)} 
        toggleTodo={(index) => this.props.toggleTodo(index)}/>


      </div>
    );
  }
}

// <button onClick={() => console.log(this.props.appState)}>
//   Show State
// </button>


const mapStateToProps = (state) => {
  return ({
    appState : state.appState
  });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeCurrentValue, addTodoToTodos, editTodo, deleteTodo, toggleTodo, searchTodo, searchTodoInList, searchByDeadline, searchTodoInListByDeadline, setTodoPlacement, setTodoPosition }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

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