import { flow } from 'lodash'
import withLoader from 'hocs/withLoader'
import withOnMount from 'hocs/withOnMount'
import CountryList from 'components/CountryList'
import selector from './selector'

export default flow([withLoader, withOnMount, selector])(CountryList)
