export function AddTodoAction(todo) {
    console.log(todo);
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export function sendTodo(todo) {
    console.log(todo);
    return {
        type: "ACTIVE_TODO",
        payload: todo
    };
}