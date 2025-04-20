import React from 'react';

import { Title } from './styled';

import axios from '../../services/axios';
import { useDispatch, useSelector } from 'react-redux';
import * as test from '../../store/modules/testesAsync/asyncActionsSaga';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <>
      <Title>
        Login Page
        <small>Login / Register</small>
      </Title>
      <button onClick={() => dispatch(test.click_request())}>Click me</button>
    </>
  );
}
/*
<p>{count}</p>
<button onClick={() => dispath(increment())}>Increment</button>
<button onClick={() => dispath(decrement())}>Decrement</button>
<button onClick={() => dispath(incrementByValue(10))}>
  Incriment by input
</button>
*/
