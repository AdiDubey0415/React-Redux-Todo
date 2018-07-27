import { combineReducers } from 'redux';
import { currentTodo } from './reducer_currentTodo';
import { todoList } from './reducer_todoList';

const rootReducers = combineReducers({
    currentTodo,
    todoList
});

export default rootReducers;

/*

State:

1. Global state for add todo inputs.
2. list of todos.

*/