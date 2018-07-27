export function AddTodoToList(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            let newstate = state.slice();
            newstate.push(action.payload);
            console.log(newstate);
            return newstate;
    }
    return state;
}