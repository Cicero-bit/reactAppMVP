import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  securitys: [],
};

const getsecuritys = createSlice({
  name: 'getsecuritys',
  initialState,
  reducers: {
    GET_SECURITYS_REQUEST: (state, action) => {
      state.isLoading = true;
      console.log('sever requested');
    },
    GET_SECURITYS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.securitys = action.payload;
      console.log('server ok');
    },
    GET_SECURITYS_FAILURE: (state = initialState, action) => {
      state.isLoading = false;
      state.securitys = [];
      console.log('server error');
    },
  },
});

export const {
  GET_SECURITYS_REQUEST,
  GET_SECURITYS_SUCCESS,
  GET_SECURITYS_FAILURE,
} = getsecuritys.actions;
export default getsecuritys.reducer;
