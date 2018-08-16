export function changeCurrentValue(value, type) {
    return ({
        type: 'CHANGE_CURRENT_VALUE',
        payload: value,
        field: type
    });
}

export function addTodoToTodos() {
    return ({
        type: 'ADD_TODO_TO_TODOS'
    });
}

export function editTodo(index) {
    return({
        type: 'EDIT_TODO',
        payload: index
    });
}

export function deleteTodo(index) {
    return({
        type: 'DELETE_TODO',
        payload: index
    });
}

export function toggleTodo(index) {
    return({
        type: 'TOGGLE_TODO',
        payload: index
    });
}

export function searchTodo(value) {
    return({
        type: 'SEARCH_TODO',
        payload: value
    });
}

export function searchTodoInList() {
    return({
        type: 'SEARCH_TODO_IN_LIST',
    });
}

export function searchByDeadline(value) {
    return({
        type: 'SEARCH_BY_DEAD_LINE',
        payload: value
    });
}

export function searchTodoInListByDeadline() {
    return({
        type: 'SEARCH_TODO_IN_LIST_BY_DEAD_LINE',
    });
}

export function setTodoPlacement(value) {
    return({
        type: 'SET_TODO_PLACEMENT',
        payload: value
    });
}

export function setTodoPosition(value) {
    return({
        type: 'SET_TODO_POSITION',
        payload: value
    });
}