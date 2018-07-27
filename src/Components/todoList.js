import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class TodoList extends Component {

    render() {
        return (
            <div>
                <ul>
                </ul>
            </div>
        );
    }
}

// The props passed here are passed to provide data, they make the data available in the state as props to this component.

// The props passed here are passed as event handlers, or action handlers, or action creators to respond to a user action or event.

export default connect()(TodoList);