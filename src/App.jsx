import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/GlobalStyles';
import Routes from './routes';
import Menu from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes />
      </Container>
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
