import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/App';
import reducers from './reducers';

const loggerMiddleware = createLogger()

let initialState = { sessionCredentials: JSON.parse(localStorage.getItem("sessionCredentials")) }

let store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

let persistSessionCredentials = () => {
  let sessionCredentials = store.getState().sessionCredentials;
  localStorage.setItem("sessionCredentials", JSON.stringify(sessionCredentials))
}

let unsubscribe = store.subscribe(persistSessionCredentials)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'))
