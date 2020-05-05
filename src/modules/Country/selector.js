import { connect } from 'react-redux'
import { get } from 'lodash'
import { NAME, actions } from './reducer'

export default connect(
  ({
    [NAME]: {
      data: { name, today, lastWeek },
      fetching,
    },
  }) => ({ name, today, lastWeek, fetching }),
  (dispatch) => ({
    onMount: (props) => {
      const id = get(props, 'match.params.id')
      dispatch(actions.get.request(id))
    },
  }),
)
