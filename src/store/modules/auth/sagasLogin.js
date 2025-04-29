import { call, put, all, takeLatest, take } from 'redux-saga/effects';
import * as actions from './authSlice';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import { REHYDRATE } from 'redux-persist';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, 'login', {
      email: payload.email,
      password: payload.password,
    });
    yield put(actions.LOGIN_SUCCESS({ ...response.data }));

    toast.success('Login realizdo');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    payload.navigate(-1);
  } catch (err) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.LOGIN_FAILURE());
  }
}

function persistRehydrate({ payload }) {
  const token = payload.auth.TokenJWT;
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(actions.LOGIN_REQUEST.type, loginRequest),
  takeLatest(REHYDRATE, persistRehydrate),
]); // escutando uma action
