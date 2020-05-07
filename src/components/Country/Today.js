import React from 'react'
import { string, number, oneOfType } from 'prop-types'
import { Text, Card, Elevation } from '@blueprintjs/core'

const Today = ({ Confirmed, Deaths, Recovered, Active }) => {
  return (
    <Card elevation={Elevation.TWO} className="column">
      <h4>Today</h4>
      <Text>Confirmed: {Confirmed}</Text>
      <Text>Deaths: {Deaths}</Text>
      <Text>Recovered: {Recovered}</Text>
    </Card>
  )
}
Today.propTypes = {
  Confirmed: oneOfType([string, number]),
  Deaths: oneOfType([string, number]),
  Recovered: oneOfType([string, number]),
}
Today.defaultProps = {
  Confirmed: 'No data',
  Deaths: 'No data',
  Recovered: 'No data',
}
export default Today
