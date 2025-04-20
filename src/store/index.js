import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './modules/counter/counterSlice';
import testSlice from './modules/testesAsync/asyncActionsSaga';
import rootSaga from './modules/sagaRoot';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice,
    testes: testSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
