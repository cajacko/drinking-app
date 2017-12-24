import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from 'store/store';
import App from 'components/App';
import { PersistGate } from 'redux-persist/es/integration/react';

const { store, persistor } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#app')
);
