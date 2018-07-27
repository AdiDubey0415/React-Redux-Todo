export function currentTodo(state = {}, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
        let newVal;
        let newState;
        newVal = action.payload.val
        switch(action.payload.type) {
            case 'todoVal':
            newState = {...state};
            newState.todoVal = newVal;
            return newState;

            case 'deadLine':
            newState = {...state};
            newState.deadLine = newVal;
            console.log(newState);
            return newState;

            default:
            break;
        }
        break;

        case 'RESET_FORM_FIELDS':
        newState = {
            todoVal: '',
            deadLine: '',
            completed: false,
            position: '-1'
        }
        return newState;

        default:
        break;
    }

    return ({
        todoVal: '',
        deadLine: '',
        completed: false,
        position: '-1'
    });
}