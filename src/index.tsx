import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Modal } from 'modules';
import store from 'store';

import App from './App';
import { GlobalStyles } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
        <Modal />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
