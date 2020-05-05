import React from 'react'
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

export default Today
