import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  ended: false,
};

const emailHanlder = createSlice({
  name: 'emailservice',
  initialState,
  reducers: {
    SEND_MAIL_REQUEST: (state, action) => {
      console.log('incio');
      state.isLoading = true;
    },
    FINALIZE_REQUEST: (state, action) => {
      console.log('fim');
      state.ended = true;
      state.isLoading = false;
    },
  },
});

export const { SEND_MAIL_REQUEST, FINALIZE_REQUEST } = emailHanlder.actions;
export default emailHanlder.reducer;
