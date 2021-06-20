import {
    SET_LOADER_USER,
    SET_USER_DETAIL,
    SET_SIGNUP_STATUS
} from './users.types';

const INITIAL_STATE = {
    id: null,
    userData: {
        fullName: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
        activationToken: "",
        role: "",
        userID: "",
    },
    status: '',
    isLoader: false,
    isUserLoading: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_DETAIL:
            return Object.assign({}, state, { 
                ...state, 
                userData: action.value })
        case SET_LOADER_USER:
            return { 
                ...state, 
                isUserLoading: action.value }
        case SET_SIGNUP_STATUS:
            return { ...state, status: action.value }
        default:
            return state
    }
}

export default userReducer;