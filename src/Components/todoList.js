import React, { Component } from 'react';
import AddTodoToList from '../Reducers/reducer_addTodo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendTodo } from '../ActionCreators/actions';

class TodoList extends Component {

    sendClickedTodo = (index, todo) => {
        // console.log(todo, index);
        // console.log(this.props);
        this.props.sendTodo(todo);
    }

    renderFunction = () => {
        // console.log(this.props);
        if(this.props.todoList) {
            return this.props.todoList.map((todo, index) => <li key={index} onClick={() => this.props.sendTodo(todo)}>{todo.todoVal}</li>);
        }
    }

    render() {
        return (
            <div>
                <ul>
                {  this.renderFunction()  }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        todoList: state.addTodo
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ sendTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);