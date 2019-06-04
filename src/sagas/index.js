import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREASE' })
}

export default function* rootSaga() {
    yield takeEvery('INCREASE_ASYNC', incrementAsync)
}