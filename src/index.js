import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Filter/App/App';
import { Provider } from 'react-redux';
import {store} from  './redux/store'
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
