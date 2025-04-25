import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootSaga from './modules/sagaRoot';
import createSagaMiddleware from 'redux-saga';
import reducersRoot from './modules/reducersRoot';
import persistReducers from './modules/reduxPersistConfig';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducers(reducersRoot),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActionPaths: ['payload.navigate'],
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
