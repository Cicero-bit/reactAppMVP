import { useState } from 'react';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/GlobalStyles';
import Routes from './routes';
import Menu from './components/Header';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes />
      </Container>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
