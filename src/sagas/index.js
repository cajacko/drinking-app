import { call, put, takeEvery } from 'redux-saga/effects';
import Api from 'models/Api';

const api = new Api();

function* getNextPhotos(action) {
  try {
    const photos = yield call(api.getNextPhotos, action.payload);
    yield put({ type: 'SUCCESS ' });
  } catch (e) {
    yield put({ type: 'FAILED ' });
  }
}

function* mySaga() {
  yield takeEvery('GET_NEXT_PHOTOS_REQUESTED', getNextPhotos);
}

export default mySaga;
