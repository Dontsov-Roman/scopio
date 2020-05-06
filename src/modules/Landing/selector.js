import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { NAME, actions } from './reducer'

export const getData = ({ [NAME]: { data } }) => data
const getSearch = ({ [NAME]: { search } }) => search

export const getMap = createSelector(getData, (data) => data.reduce((prev, cur) => ({ ...prev, [cur.Slug]: cur }), {}))

export const getFiltered = createSelector(getData, getSearch, (data, search) =>
  data.filter(({ Country }) => Country.toLowerCase().match(search.toLowerCase())),
)

const getAll = (state) => {
  const {
    [NAME]: { fetching, search },
  } = state
  return { data: getFiltered(state), fetching, search }
}
export default connect(getAll, { onMount: actions.get.request, onSearch: actions.search })
