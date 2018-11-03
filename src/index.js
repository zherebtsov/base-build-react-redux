import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux/create';
import { Provider } from 'react-redux';
import App from 'containers/App';
import './style.css';

const initialState = {};
const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store} key="provider">
    <App/>
  </Provider>,
  document.getElementById('root')
);
