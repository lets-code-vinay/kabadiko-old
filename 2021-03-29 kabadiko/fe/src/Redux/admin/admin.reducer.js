import {
    SET_ADMIN_DETAIL,
    SET_ADMIN_SIGNUP_STATUS,
    SET_LOADER_ADMIN
} from './admin.types';

const INITIAL_STATE = {
    id: null,
    adminData: {
        fullName: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
        activationToken: "",
        role: "",
        userID: ""
    },
    status: "",
    isLoader: false,
    isAdminLoading: false
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ADMIN_DETAIL:
            return Object.assign({}, state, {
                ...state,
                adminData: action.value
            })
        case SET_LOADER_ADMIN:
            return { ...state, isAdminLoading: action.value }
        case SET_ADMIN_SIGNUP_STATUS:
            return { ...state, status: action.value }
        default:
            return state
    }
}

export default adminReducer;