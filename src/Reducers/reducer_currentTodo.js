export function todoState(state = {}, action) {
    switch(action.type) {
        case 'ADD_TODO':
        let newVal;
        let newState;
        newVal = action.payload.val
        switch(action.payload.type) {
            case 'todoVal':
            newState = {...state};
            newState.currentTodo.todoVal = newVal;
            return newState;

            case 'deadLine':
            newState = {...state};
            newState.currentTodo.deadLine = newVal;
            return newState;

            default:
            break;
        }
        break;

        case 'SUBMIT_FORM':
        newState = {...state};
        newState.todoList.push(newState.currentTodo);
        newState.currentTodo = {
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1',
        }
        console.log(newState);
        return newState;

        default:
        break;
    }

    return ({
        currentTodo : {
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1',
        },
        todoList: []
    });
}