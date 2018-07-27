import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCurrentTodo } from '../ActionCreators/action_index';
import { submitForm } from '../ActionCreators/action_index';

class AddTodo extends Component {

    showState = () => {
        //console.log(this.props.todoState);
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.submitForm();
        // console.log(event.target.value);
    }

    render() {
        return (
            <div>
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <input type="text" value={this.props.todoState.currentTodo.todoVal}
                onChange={(event) => this.props.changeCurrentTodo('todoVal', event.target.value)}/>
                <input type="date" value={this.props.todoState.currentTodo.deadLine} 
                onChange={(event) => this.props.changeCurrentTodo('deadLine', event.target.value)}/>
                <select>
                    <option value="1">
                        After
                    </option>
                    <option value="-1">
                        Before
                    </option>
                </select>
                <select>
                    <option>
                        One
                    </option>
                    <option>
                        Two
                    </option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => this.showState()}>Click me</button>
            <input type="text" css={{'marginTop': '100px'}}/>
            </div>
        );
    }
}

// The props passed here are passed to provide data, they make the data available in the state as props to this component.

const mapStateToProps = (state) => {
    return ({
        todoState: state.todoState
    });
}

// The props passed here are passed as event handlers, or action handlers, or action creators to respond to a user action or event.

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeCurrentTodo, submitForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);









/*

Requirements:

1. Add Todo Text and click submit, empty the fields.
2. On selection of a list item, populate the data in the fields.

*/