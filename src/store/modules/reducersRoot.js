import testesAsync from './testesAsync/asyncActionsSaga';
import counter from './counter/counterSlice';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  counter: counter,
  testes: testesAsync,
});

export default reducers;
