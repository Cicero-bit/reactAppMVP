import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../services/axios';
import { useNavigate } from 'react-router';

const initialState = {
  isLoggedIn: false,
  TokenJWT: '',
  user: {},
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN_REQUEST: (state, action) => {
      state.isLoading = true;
      console.log('ACTION LOGIN REQUESTED, STARTING SAGA');
    },
    LOGIN_SUCCESS: (state = initialState, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.TokenJWT = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
      console.log(state, 'End of login SAGA');
    },
    LOGIN_FAILURE: (state = initialState, action) => {
      delete axios.defaults.headers.Authorization;
      return initialState;
    },
  },
});

export const { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } =
  authSlice.actions;
export default authSlice.reducer;
