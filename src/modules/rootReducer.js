import { combineReducers } from 'redux'
import country from './Country/reducer'
import landing from './Landing/reducer'

export const rootReducer = combineReducers({
  [country.NAME]: country.reducer,
  [landing.NAME]: landing.reducer,
})
