import * as api from '../../services/api';
import { SET_LOADER_USER, SET_USER_DETAIL, SET_SIGNUP_STATUS } from './users.types';

export function setLoader(type, data) {
    return {
        type: type,
        value: data,
    }
}

export function userDetail(user) {
    console.log('-----user in action call--', user)
    return {
        type: SET_USER_DETAIL,
        value: user
    }
}
export function signupStatus(status){
    return{
        type: SET_SIGNUP_STATUS,
        value: status
    }
}

export function userSignUp(userInfo){
    return(dispatch) => {
        dispatch(setLoader(SET_LOADER_USER, true));
        delete userInfo.confirmPassword;

        api.postAsJsonLocal('/signup', userInfo)
            .then((response) => {
                dispatch(userDetail(response.data.user))
                dispatch(signupStatus(response.status))
                dispatch(setLoader(SET_LOADER_USER, false));
            })      
            .catch((error) =>{
                dispatch(setLoader(SET_LOADER_USER, false));
            })  
    }
}

