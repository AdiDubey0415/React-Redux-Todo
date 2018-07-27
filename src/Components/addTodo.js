import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddTodoAction } from '../ActionCreators/actions';

// const todoDetails = {};

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1'
        }
    }

    handleInputTextChange = (event) => {
        this.setState({
            todoVal: event.target.value
        });
    }

    handleInputDateChange = (event) => {
        this.setState({
            deadLine: event.target.value
        });
    }

    showState = (event) => {
        this.setState({
            todoVal: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.AddTodo(this.state);
        this.setState({
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1'
        });
    }

    componentWillMount = () => {
        console.log(this.props.activeTodo);
    }

    componentDidMount = () => {
        console.log(this.props.activeTodo);
    }

    render() {
        return (
            <div>
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <input type="text" onChange={(event) => this.handleInputTextChange(event)} value={this.state.todoVal}/>
                <input type="date" onChange={this.handleInputDateChange} value={this.state.deadLine}/>
                <select value={this.state.position} onChange={(event) => this.setState({
                    position: event.target.value
                })}>
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
                        Tw
                    </option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => console.log(this.props.activeTodo)}>Click me</button>
            <input type="text" onChange={this.showState} css={{'marginTop': '100px'}}/>
            </div>
        );
    }
}

// The props passed here are passed to provide data, they make the data available in the state as props to this component.
const mapStateToProps = (state) => {
    return ({
        activeTodo: state.ActiveTodo
    });
}

// The props passed here are passed as event handlers, or action handlers, or action creators to respond to a user action or event.
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AddTodo: AddTodoAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);