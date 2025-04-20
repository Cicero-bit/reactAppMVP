import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    click_success: () => {
      console.log('success');
    },
    click_request: () => {
      console.log('requesting');
    },
    click_fail: () => {
      console.log('fail');
    },
  },
});

export const { click_success, click_request, click_fail } = testSlice.actions;
export default testSlice.reducer;
