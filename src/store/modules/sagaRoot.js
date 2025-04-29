import { all } from 'redux-saga/effects';

import auth from './auth/sagasLogin';
import getSecuritys from './allsecurity/securitysaga';

export default function* rootSaga() {
  return yield all([auth, getSecuritys]);
}
