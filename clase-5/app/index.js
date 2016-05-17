import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import SimpleComponent from './components/simple_component';

const logger = createLogger();
let store = createStore(
  reducers,
  applyMiddleware(logger)
);

const content = document.getElementById('content');

render(
  <Provider store={store}>
    <SimpleComponent />
  </Provider>,
  content
);
