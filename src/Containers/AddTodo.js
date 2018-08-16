import React, { Component } from 'react';
import '../App.css';

export default class AddTodo extends Component {

    renderSelectList = () => {
        return (this.props.appState.todos.map((todo, index) => {
            return (
                <option key={index} value={index}>
                    {todo.value}
                </option>
            );
        }));
    }

    showClickedItemIndex = (event) => {
        let position = event.target.value;
        this.props.setTodoPosition(position);
    }

    showSelectedValue = (event) => {
        let placement = event.target.value;
        this.props.setTodoPlacement(placement);
    }

    render() {
        return (
            <div className="div-class">
                <form className="form-class">
                    <input className="input-field-class" type="text" value={this.props.appState.currentState.value}
                    onChange={(event) => this.props.handleValueChange(event, 'value')}/>
                    <input className="input-field-class" type="date" value={this.props.appState.currentState.deadLine}onChange={(event) => this.props.handleValueChange(event, 'deadLine')}/>
                    <select className="select-tag-class" onChange={(event) => this.showClickedItemIndex(event)} value={this.props.appState.currentState.position}>
                        { this.renderSelectList() }
                    </select> 
                    <select className="select-tag-class" onChange={this.showSelectedValue} value={this.props.appState.currentState.placement}>
                        <option value="-1">
                            Before
                        </option>
                        <option value="1">
                            After
                        </option>
                    </select>
                    <button className="submit-btn-class " onClick={this.props.saveTodo}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}