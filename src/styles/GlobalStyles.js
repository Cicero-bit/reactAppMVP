import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    font-optical-sizing: auto;
    font-style: normal;
    background-color: #F9F9F9;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
