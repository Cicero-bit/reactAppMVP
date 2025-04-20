import { all } from 'redux-saga/effects';

import exemple from './testesAsync/sagas';

export default function* rootSaga() {
  return yield all([exemple]);
}
