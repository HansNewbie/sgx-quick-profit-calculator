import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';

import {configStateListener} from './services/Calculator';

const rootElement = document.getElementById('root');

const unsubscribe = store.subscribe(() => configStateListener(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
