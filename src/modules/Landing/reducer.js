import {
  createRequestHandlers,
  createReducer,
  createRequestAction,
  createRequestTypes,
  createAction,
} from 'helpers/reduxHelpers'

export const NAME = 'landing'

const initState = {
  fetching: true,
  error: null,
  data: [],
  dataMap: {},
  search: '',
}

const types = {
  GET: createRequestTypes(`${NAME}_GET`),
  SEARCH: `${NAME}_SEARCH`,
}
const actions = {
  get: createRequestAction(types.GET),
  search: createAction(types.SEARCH),
}
const handlers = {
  ...createRequestHandlers(types.GET),
  [types.SEARCH]: (state, { payload: search }) => {
    console.warn(search)
    return { ...state, search }
  },
}
const reducer = createReducer(initState, handlers)

export { actions, types, reducer }
export default { reducer, NAME }
