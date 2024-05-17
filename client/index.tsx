import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Loader, ToastList } from 'components';
import { Modal } from 'modules';
import store from 'store';

import App from './src/App';
import { GlobalStyles } from './src/styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
        <GlobalStyles />
        <Modal />
        <ToastList />
        <Loader />
      </Provider>
    </HashRouter>
  </StrictMode>
);
