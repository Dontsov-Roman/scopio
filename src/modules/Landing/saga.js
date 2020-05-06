import { takeLatest, put, select } from 'redux-saga/effects'
import api from 'helpers/api'
import { isEmpty } from 'lodash'
import { actions, types } from './reducer'
import { getData } from './selector'

function* getAll() {
  try {
    yield put(actions.search())
    const oldData = yield select(getData)
    if (isEmpty(oldData)) {
      const data = yield api.getCountries()
      yield put(actions.get.success(data))
    } else {
      yield put(actions.get.success(oldData))
    }
  } catch (e) {
    console.warn('Error', e)
    yield put(actions.get.failure())
  }
}

export default function* sagas() {
  yield takeLatest(types.GET.REQUEST, getAll)
}
