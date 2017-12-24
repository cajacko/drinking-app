import { combineReducers } from 'redux';
import names from 'reducers/names';
import started from 'reducers/started';
import games from 'reducers/games';
import fetchStatus from 'reducers/fetchStatus';

export default combineReducers({
  names,
  started,
  games,
  fetchStatus,
});
