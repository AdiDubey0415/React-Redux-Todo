import { combineReducers } from 'redux';
import { AddTodoToList } from './reducer_addTodo';
import { ActiveTodo } from './reducer_active_todo';

const rootReducers = combineReducers({
    addTodo: AddTodoToList,
    ActiveTodo
    // activeTodo
});

// console.log(111);

export default rootReducers;

/*

State:

1. Global state for add todo inputs.
2. list of todos.

*/