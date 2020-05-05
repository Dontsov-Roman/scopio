import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { dateFormat } from 'helpers/date'
import TooltipContent from './TooltipContent'

const LastWeek = ({ data }) => {
  return (
    <div className="last_week">
      <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis tickFormatter={dateFormat} dataKey="Date" />
        <YAxis dataKey="Cases" />
        <Tooltip content={TooltipContent} />
        <Line dot={false} type="monotone" dataKey="Cases" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default LastWeek
