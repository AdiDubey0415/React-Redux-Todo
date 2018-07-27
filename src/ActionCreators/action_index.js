export function changeCurrentTodo(fieldName, val) {
    console.log(val, fieldName);
    return ({
        type: 'ADD_TODO',
        payload: {
            type: fieldName,
            val: val
        }
    });
}

export function resetFormFields() {
    console.log('1234');
    return ({
        type: 'RESET_FORM_FIELDS'
    });
}