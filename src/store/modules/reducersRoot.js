import { combineReducers } from 'redux';
import authSlice from './auth/authSlice';

const reducers = combineReducers({
  auth: authSlice,
});

export default reducers;
