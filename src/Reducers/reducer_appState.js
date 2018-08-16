let newState;
export default function(state = {}, action) {

    switch (action.type) {
        // Set the value of the currentstate
        case 'CHANGE_CURRENT_VALUE':
        newState = {...state};
        newState.currentState[action.field] = action.payload;
        return newState;

        // ADD the todo to the list
        case 'ADD_TODO_TO_TODOS':
        newState = {...state};
        newState.isSearch = false;
        if(newState.isEdit !== '') {
            newState.todos[newState.isEdit] = newState.currentState;
            newState.isEdit = '';
            newState.currentState = {
                value: '',
                deadLine: '',
                completed: false
            }
            newState.searchState = {
                value: '',
                deadLine: '',
                completed: false
            }
        }
        else {
            if(newState.currentState.deadLine != '' && newState.currentState.value != '') {
                if(newState.currentState.placement === '1') {
                    console.log('ON', newState.currentState.position + 1);
                    let pos = Number(newState.currentState.position) + 1;
                    newState.todos.splice(pos, 0, newState.currentState)
                } else {
                    console.log('OFF');
                    newState.todos.splice(newState.currentState.position, 0, newState.currentState)
                }
                // let newPosition = newState.todos.length;
                newState.currentState = {
                    value: '',
                    deadLine: '',
                    completed: false,
                    position: '',
                    placement: '-1'
                }
                newState.searchState = {
                    value: '',
                    deadLine: '',
                    completed: false
                }
            }
        }
        console.log(newState);
        return newState;

        case 'EDIT_TODO':
        newState = {...state};
        newState.isEdit = action.payload;
        newState.currentState = newState.todos[action.payload];
        return newState;

        case 'DELETE_TODO':
        newState = {...state};
        newState.todos.splice(action.payload, 1);
        return newState;

        case 'TOGGLE_TODO':
        newState = {...state};
        newState.todos[action.payload].completed = !newState.todos[action.payload].completed;
        return newState;

        case 'SEARCH_TODO':
        newState = {...state};
        newState.searchState.value = action.payload;
        // newState.todos = newState.todos.filter((val) => val.value === newState.searchState.value);
        return newState;

        case 'SEARCH_BY_DEAD_LINE':
        newState = {...state};
        newState.searchState.deadLine = action.payload;
        return newState;

        case 'SEARCH_TODO_IN_LIST':
        newState = {...state};
        newState.isSearch = true;
        let searchValue = new RegExp(newState.searchState.value.toLowerCase(), 'g');
        newState.searchedTodos = newState.todos.filter((todo) => todo.value.toLowerCase().match(searchValue));
        return newState;

        case 'SEARCH_TODO_IN_LIST_BY_DEAD_LINE':
        newState = {...state};
        newState.isSearch = true;
        newState.searchedTodos = newState.todos.filter((todo) => todo.deadLine > newState.searchState.deadLine);
        return newState;

        case 'SET_TODO_PLACEMENT':
        newState = {...state};
        newState.currentState.placement = action.payload;
        console.log(newState);
        return newState;

        case 'SET_TODO_POSITION':
        newState = {...state};
        newState.currentState.position = action.payload;
        console.log(newState);
        return newState;

        default:
        return {
            currentState: {
                value: '',
                deadLine: '',
                completed: false,
                position: '',
                placement: '1'
            },
            todos: [],
            searchedTodos: [],
            searchState: {
                value: '',
                deadLine: '',
                completed: false
            },
            isEdit: '',
            isSearch: false
        };
    }

}