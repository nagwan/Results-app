
import {ADD_NEW_USER, LOGGED_IN_USER, LOG_USER_OUT} from "../actions/actionsTypes";

const initialState = {

    users : [],
    loggedInUser : {}

}

const rootReducer =  (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_NEW_USER:
            return {...state, users : [...state.users, action.payload]};

        case LOGGED_IN_USER: 
            return Object.assign({}, state, { loggedInUser: action.payload});

        case LOG_USER_OUT:
            return Object.assign({}, state, {loggedInUser: {}})
            
        default:
            return state;

    }
}

export default rootReducer;
   

