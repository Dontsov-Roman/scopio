import Country from 'components/Country'
import { flow } from 'lodash'
import withLoader from 'hocs/withLoader'
import withOnMount from 'hocs/withOnMount'
import selector from './selector'

export default flow([withLoader, withOnMount, selector])(Country)
