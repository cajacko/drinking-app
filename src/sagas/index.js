import { call, put, takeEvery } from 'redux-saga/effects';
import Api from 'models/Api';

const api = new Api();

function* getGames(action) {
  try {
    const games = yield call(api.getGames);
    yield put({ type: 'GET_GAMES_SUCCEEDED', payload: games });
  } catch (e) {
    yield put({ type: 'GET_GAMES_FAILED' });
  }
}

function* mySaga() {
  yield takeEvery('GET_GAMES_REQUESTED', getGames);
}

export default mySaga;
