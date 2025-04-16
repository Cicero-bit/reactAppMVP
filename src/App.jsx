import { useState } from 'react';
import './App.css';
import Login from './pages/Login/index';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Login />
      <GlobalStyles />
    </Container>
  );
}

export default App;
