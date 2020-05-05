import React from 'react'
import { Card, Elevation, Text } from '@blueprintjs/core'
import { dateFormat } from 'helpers/date'
import { get } from 'lodash'

const TooltipContent = ({ active, payload, label }) => {
  return active ? (
    <Card elevation={Elevation.TWO} className="custom_tooltip">
      <Text>{dateFormat(label)}</Text>
      <Text>
        {get(payload, '[0].dataKey')}: {get(payload, '[0].value')}
      </Text>
    </Card>
  ) : null
}

export default TooltipContent
