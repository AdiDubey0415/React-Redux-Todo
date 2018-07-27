export function ActiveTodo(state, action) {
    // console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
        return ({
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1'
        });
        break;

        case 'ACTIVE_TODO':
        return ({
            todoVal: action.payload.todoVal,
            deadLine: action.payload.deadLine,
            completed: action.payload.completed,
            position: action.payload.position
        });
    }
    return ({
        todoVal: '',
        deadLine: '',
        completed: false,
        position: '-1'
    });
}