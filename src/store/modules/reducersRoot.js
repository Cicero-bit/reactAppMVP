import { combineReducers } from 'redux';
import authSlice from './auth/authSlice';
import getSecuritysSlice from './allsecurity/indexslice';

const reducers = combineReducers({
  auth: authSlice,
  securitys: getSecuritysSlice,
});

export default reducers;
