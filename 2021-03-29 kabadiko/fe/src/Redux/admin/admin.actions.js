import * as api from '../../services/api';
import {
    SET_LOADER_ADMIN,
    SET_ADMIN_SIGNUP_STATUS,
    SET_ADMIN_DETAIL,
    SET_ROLE,
    SET_USER_TOKEN,
    LOGIN_LOADER,
    LOG_IN,
    LOG_OUT,
    ADMIN_LOGIN_SUCCESS,
    IS_USER_LOGGED_IN
} from '../admin/admin.types';

export function setLoader(type, data) {
    return {
        type: type,
        data: data
    }
}

export function adminDetail(admin) {
    console.log('adnmiin detail in action calll', admin)
    return {
        type: SET_ADMIN_DETAIL,
        value: admin
    }
}
export function signupStatus(status) {
    return {
        type: SET_ADMIN_SIGNUP_STATUS,
        value: status
    }
}

export function adminSignup(adminInfo) {
    return (dispatch) => {
        dispatch(setLoader(SET_LOADER_ADMIN, true));
        delete adminInfo.confirmPassword;

        api.postAsJsonLocal('/admin/signup', adminInfo)
            .then((response) => {
                dispatch(adminDetail(response.data.adminUser));
                dispatch(setLoader(SET_LOADER_ADMIN, false));
                dispatch(signupStatus(response.status))
            })
            .catch((error) => {
                dispatch(setLoader(SET_LOADER_ADMIN, false));

            })
    }
}

export function adminLogin(adminData) {
    console.log('admin data before api call', adminData);
    return (dispatch) => {
        dispatch(setLoader(LOGIN_LOADER, true));
        return new Promise((resolve, reject) => {
            api.storeWithoutHeader(`/admin/signin`, adminData)
            .then((response) => {
                console.log('response-----', response)
                dispatch(setLoader(LOGIN_LOADER, false));
            })
            .catch((error) => {
                console.log('errrrrorrrrrrr', error)
            })
        })
    }
}