import { combineReducers } from 'redux';
import userReducer from './users/users.reducer';
import adminReducer from './admin/admin.reducer';

const rootReducer = combineReducers({
    users:userReducer,
    admin: adminReducer,
})

export default rootReducer;