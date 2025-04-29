import { call, put, all, takeLatest, take } from 'redux-saga/effects';
import * as actions from './indexslice';
import axios from '../../../services/axios';

function* getAllSecuritys() {
  try {
    const response = yield call(axios.get, 'security');
    yield put(actions.GET_SECURITYS_SUCCESS(response.data));
  } catch (err) {
    yield put(actions.GET_SECURITYS_FAILURE());
  }
}

export default all([
  takeLatest(actions.GET_SECURITYS_REQUEST.type, getAllSecuritys),
]); // escutando uma action
