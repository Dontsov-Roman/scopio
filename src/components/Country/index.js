import React from 'react'
import { Text } from '@blueprintjs/core'
import Today from './Today'
import LastWeek from './LastWeek'

const Country = ({ name, today, lastWeek }) => {
  return (
    <div className="country">
      <h3 className="title">{name}</h3>
      <div className="row">
        <Today {...today} />
        <LastWeek data={lastWeek} />
      </div>
    </div>
  )
}

export default Country
