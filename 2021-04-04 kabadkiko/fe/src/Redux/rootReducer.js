import { combineReducers } from 'redux';
import userTypeReducer from './usersType/userType.reducer';

const rootReducer = combineReducers({
    userType: userTypeReducer
})

export default rootReducer;