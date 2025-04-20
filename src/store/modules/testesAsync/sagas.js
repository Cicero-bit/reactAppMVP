import { call, put, all, takeLatest, take } from 'redux-saga/effects';
import * as actions from './asyncActionsSaga';

const requesition = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requesition);
    yield put(actions.click_success());
  } catch {
    yield put(actions.click_fail());
  }
}

export default all([takeLatest(actions.click_request.type, exampleRequest)]); // escutando uma action
