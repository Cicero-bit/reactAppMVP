import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  body{
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    font-optical-sizing: auto;
    font-style: normal;
    background-color: ${colors.backgroundColor};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 900px;
  background-color: #fff;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
