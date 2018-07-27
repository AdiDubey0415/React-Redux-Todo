import { combineReducers } from 'redux';
import { todoState } from './reducer_currentTodo';

const rootReducers = combineReducers({
    todoState
});

export default rootReducers;

/*

State:

1. Global state for add todo inputs.
2. List of todos.

*/