import React, { Component } from 'react';
import '../App.css';

const completedClass = {
    backgroundColor: 'green'
}

const unCompletedClass = {
    backgroundColor: 'red'

}
let class_name;
export default class TodoList extends Component {

    renderTodoList = () => {
        if(this.props.appState.isSearch) {
            return this.props.appState.searchedTodos.map((todo, index) => {
                todo.completed ? class_name = "li-class completed-class": class_name = "li-class incompleted-class";
                return (
                    <li key={index} className={class_name}>
                        <span onClick={() => this.props.editTodo(index)}>{ todo.value}</span>
                        <span className="deadline-class">{ todo.deadLine }</span>
                        <button onClick={() => this.props.deleteTodo(index)} className="delete-toggle-button-class">Delete</button>
                        <button onClick={() => this.props.toggleTodo(index)} className="delete-toggle-button-class">Toggle</button>
                    </li>
                );
            }); 
        }
        else if (this.props.todos && !this.props.appState.isSearch) {
            return this.props.todos.map((todo, index) => {
                todo.completed ? class_name = "li-class completed-class": class_name = "li-class incompleted-class";
                return (
                    <li key={index} className={class_name}>
                        <span onClick={() => this.props.editTodo(index)}>{ todo.value}</span>
                        <span className="deadline-class">{ todo.deadLine }</span>
                        <button onClick={() => this.props.deleteTodo(index)} className="delete-toggle-button-class">Delete</button>
                        <button onClick={() => this.props.toggleTodo(index)} className="delete-toggle-button-class">Toggle</button>
                    </li>
                );
            });
        }
    }

    render() {
        return (
            <div className="div-class todoList-div-class">
                <span className="span-class">
                    Todo List
                </span>
                <ul className="ul-class">
                    {this.renderTodoList()}
                </ul>
            </div>
        );
    }
}