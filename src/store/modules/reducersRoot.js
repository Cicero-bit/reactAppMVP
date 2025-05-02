import { combineReducers } from 'redux';
import authSlice from './auth/authSlice';
import getSecuritysSlice from './allsecurity/indexslice';
import mailHandler from './emailsSenders/emailSlice';

const reducers = combineReducers({
  auth: authSlice,
  securitys: getSecuritysSlice,
  mail: mailHandler,
});

export default reducers;
