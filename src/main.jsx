import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store, { persistor } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={Store}>
        <App />
      </Provider>
    </PersistGate>
  </StrictMode>
);
