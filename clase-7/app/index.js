import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import SimpleContainer from './components/simple_container';

const logger = createLogger();
let store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

render(
  <Provider store={store}>
    <SimpleContainer />
  </Provider>,
  content
);
