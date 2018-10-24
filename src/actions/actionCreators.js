
import {ADD_NEW_USER, LOGGED_IN_USER, LOG_USER_OUT} from "./actionsTypes";

export const addNewUser = (newUser) => {
    return {
        type : ADD_NEW_USER,
        payload : newUser
    }
}

export const setTheLoggedInUser = (loggedInUser) => {
    return {
        type : LOGGED_IN_USER, 
        payload : loggedInUser
    }
}

export const logUserOut = () => {
    return {
        type : LOG_USER_OUT,
    }
}