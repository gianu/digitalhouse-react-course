import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import mySaga from './sagas';
import SimpleContainer from './components/simple_container';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(mySaga);

render(
  <Provider store={store}>
    <SimpleContainer />
  </Provider>,
  content
);
