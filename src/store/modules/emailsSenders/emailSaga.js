import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './emailSlice';
import axios from '../../../services/axios';

function* mailMiddleware(action) {
  try {
    console.log(action.payload);
    yield call(axios.post, 'mail', action.payload);
    yield put(actions.FINALIZE_REQUEST());
  } catch (e) {
    console.log(e);
    yield put(actions.FINALIZE_REQUEST());
  }
}

export default all([
  takeLatest(actions.SEND_MAIL_REQUEST.type, mailMiddleware),
]); // escutando uma action
