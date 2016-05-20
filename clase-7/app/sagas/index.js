import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { addValueToService } from '../service';

// worker Saga
function* addNumber(action) {
  try {
    const response = yield call(addValueToService, action.payload);
    if (response.status === 200) {
      yield put({type: 'NUMBER_ADD_SUCCESS', payload: +action.payload});
    } else {
      yield put({type: 'NUMBER_ADD_FAIL'});
    }
  } catch(e) {
    yield put({type: 'NUMBER_ADD_FAIL'});
  }
}

function* subtractNumber(action) {
  try {
    const response = yield call(addValueToService, action.payload);
    if (response.status === 200) {
      yield put({type: 'NUMBER_SUBTRACT_SUCCESS', payload: +action.payload});
    } else {
      yield put({type: 'NUMBER_SUBTRACT_FAIL'});
    }
  } catch(e) {
    yield put({type: 'NUMBER_SUBTRACT_FAIL'});
  }
}

export default function* mySaga() {
  yield [
    takeEvery('NUMBER_ADD_BEGIN', addNumber),
    takeEvery('NUMBER_SUBTRACT_BEGIN', subtractNumber)
  ];
  // yield* takeEvery('NUMBER_ADD_BEGIN', addNumber);
  // yield* takeEvery('NUMBER_SUBTRACT_BEGIN', subtractNumber);
}
