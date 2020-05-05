import { takeLatest, put, select } from 'redux-saga/effects'
import api from 'helpers/api'
import { get } from 'lodash'
import { getFrom, getTo } from 'helpers/date'
import { getMap } from 'modules/Landing/selector'
import { actions as landingActions } from 'modules/Landing/reducer'
import { actions, types } from './reducer'

function* getCountry({ payload: Slug }) {
  try {
    yield put(landingActions.get.request())
    const today = yield api.getTodayStatus(Slug)
    const lastWeek = yield api.getStatus(Slug, getFrom(), getTo())
    const countries = yield select(getMap)
    const name = get(countries, `[${Slug}].Country`)
    yield put(actions.get.success({ name, today, lastWeek }))
  } catch (e) {
    console.warn('Error', e)
    yield put(actions.get.failure())
  }
}

export default function* sagas() {
  yield takeLatest(types.GET.REQUEST, getCountry)
}
