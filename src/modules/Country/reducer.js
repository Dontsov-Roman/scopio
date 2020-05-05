import { createRequestHandlers, createReducer, createRequestAction, createRequestTypes } from 'helpers/reduxHelpers'

export const NAME = 'country'

const initState = {
  fetching: true,
  error: null,
  data: {},
}

const types = {
  GET: createRequestTypes(`${NAME}_GET`),
}
const actions = {
  get: createRequestAction(types.GET),
}
const handlers = {
  ...createRequestHandlers(types.GET),
}
const reducer = createReducer(initState, handlers)

export { actions, types, reducer }
export default { reducer, NAME }
