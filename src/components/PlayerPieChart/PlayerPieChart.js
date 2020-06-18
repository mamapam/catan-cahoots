import React from 'react';
import { Typography } from '@material-ui/core';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

import Auxiliary from '../../hoc/Auxiliary';

const PlayerPieChart = (props) => {

  const transformedData = [
    {
      name: 'Wins', value: props.data.wins, color: '#FF1B1C'
    },
    {
      name: 'Losses', value: props.data.losses, color: '#5FAD41'
    }
  ];

  return(
    <Auxiliary>
      <Typography>{props.data.name}</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
              data={transformedData}
              innerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value">
            {transformedData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Auxiliary>
  );
}

export default PlayerPieChart;