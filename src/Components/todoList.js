import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoList extends Component {

    // renderFunction = () => {
    //     console.log(111);
    //     return this.props.todoList.map((todo) => <li>{todo.todoVal}</li>);
    // }

    renderFunction = () => {
        if(this.props.todoList.length != 0) {
            return this.props.todoList.map(todo => {
                return <li key={todo.todoVal}>{todo.todoVal}</li>   
            })
        }
    }

    render() {
        // if(this.props.todoList.length === 0) {
        //     console.log(333);
        //     return (
        //         <p>Not Yet</p>
        //     );
        // }
        return (
            <div>
                <ul>
                    {this.renderFunction()}
                </ul>
                <button onClick={() => console.log(this.props.todoList)}>
                    Show State
                </button>
            </div>
        );
    }
}

// The props passed here are passed to provide data, they make the data available in the state as props to this component.

const mapStateToProps = (state) => {
    return ({
        todoList: state.todoState.todoList
    });
}

// The props passed here are passed as event handlers, or action handlers, or action creators to respond to a user action or event.

export default connect(mapStateToProps)(TodoList);