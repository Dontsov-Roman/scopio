import { all } from 'redux-saga/effects'
import country from './Country/saga'
import landing from './Landing/saga'

export function* rootSaga() {
  yield all([country(), landing()])
}
