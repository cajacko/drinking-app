const { Iterable } = require('immutable');
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';

let composeEnhancers = compose;

const logger = createLogger({
  stateTransformer: state => {
    let newState = {};

    for (var i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  },
});

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
