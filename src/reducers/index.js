import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import names from 'reducers/names';
import started from 'reducers/started';
import games from 'reducers/games';
import fetchStatus from 'reducers/fetchStatus';
import showGamesList from 'reducers/showGamesList';

const config = {
  key: 'root',
  blacklist: ['fetchStatus', 'started', 'showGamesList'],
  storage,
};

export default persistCombineReducers(config, {
  names,
  started,
  games,
  fetchStatus,
  showGamesList,
});
