import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';

let composeEnhancers = compose;

if (
  typeof window !== 'undefined' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default () => store;
