import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const StackedBarChart = (props) => {
  return(
    <ResponsiveContainer>
      <BarChart width={730} height={250} data={props.data} >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wins" stackId="a" fill="#FF1B1C" />
        <Bar dataKey="losses" stackId="a" fill="#5FAD41" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StackedBarChart;