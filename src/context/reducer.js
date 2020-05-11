import {ADD_TODO, REMOVE_TODO} from './action.type'

export default (state, action) => {
    switch (action.type) {

        case ADD_TODO:
            return [...state, action.payload]   //payload says what the information
                                                //it carries with it like email,password.

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state;
    }
}