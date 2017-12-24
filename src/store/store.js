import { Iterable } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import { persistStore } from 'redux-persist';
import reducers from 'reducers';

let composeEnhancers = compose;

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) {
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
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default () => ({
  store,
  persistor,
});
