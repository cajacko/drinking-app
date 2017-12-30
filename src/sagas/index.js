import { call, put, takeEvery } from 'redux-saga/effects';
import Api from 'models/Api';

const api = new Api();

function* getGames(action) {
  try {
    const games = yield call(api.getGames);
    yield put({ type: 'GET_GAMES_SUCCEEDED', payload: games });
  } catch (e) {
    yield put({ type: 'GET_GAMES_FAILED', payload: e });
  }
}

function* setGames({ payload }) {
  try {
    yield call(api.setGames, payload);
    yield put({ type: 'SET_GAMES_SUCCEEDED' });
  } catch (e) {
    yield put({ type: 'SET_GAMES_FAILED', payload: e });
  }
}

function* mySaga() {
  yield takeEvery('GET_GAMES_REQUESTED', getGames);
  yield takeEvery('SET_GAMES_REQUESTED', setGames);
}

export default mySaga;
