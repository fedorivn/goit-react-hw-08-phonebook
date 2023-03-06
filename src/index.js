import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Filter/App/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
