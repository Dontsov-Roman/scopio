import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { dateFormat } from 'helpers/date'
import withEmptyScreen from 'hocs/withEmptyScreen'
import EmptyScreen from 'components/EmptyScreen'
import TooltipContent from './TooltipContent'

const LastWeek = ({ data }) => {
  return (
    <div className="last_week">
      <h4>Last week</h4>
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis tickFormatter={dateFormat} dataKey="Date" />
        <YAxis dataKey="Cases" />
        <Tooltip content={TooltipContent} />
        <Line dot={false} type="monotone" dataKey="Cases" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default withEmptyScreen({ EmptyScreen, isEmpty: ({ data }) => data.length < 1 })(LastWeek)
