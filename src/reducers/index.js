import { combineReducers } from 'redux';
import names from 'reducers/names';
import started from 'reducers/started';

export default combineReducers({
  names,
  started,
});
