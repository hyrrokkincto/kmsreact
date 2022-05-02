import React, { PureComponent } from 'react';
import { ScatterChart,
  Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const data = [
    { name: '14 April', y: 1 },
    { name: '14 April', y: 1.2 },
    { name: '14 April', y: 1.3 },
    { name: '17 April', y: 1 },
    { name: '18 April', y: 1.1 },
    { name: '19 April', y: 1.2 },
    { name: '20 April', y: 1.3 },
    { name: '21 April', y: 1.1 },
    { name: '22 April', y: 1.1 },
    { name: '23 April', y: 2 },
    { name: '24 April', y: 1.1 },
    { name: '2 May', y: 1.2 },
    { name: '4 May', y: 1 },
    { name: '5 May', y: 1.1 },
    { name: '6 May', y: 1.2 },
    { name: '7 May', y: 1.2 },
    { name: '8 May', y: 1 },
    { name: '9 May', y: 2 },
    { name: '10 May', y: 1.1 },
    { name: '21 May', y: 1.2 },
    { name: '22 May', y: 1.4 },
    { name: '23 May', y: 1.1 },
    { name: '24 May', y: 2.1 },
    { name: '25 May', y: 1.1 }
  ];

const AverageProtectedHours = () =>{  
  return (
    <div style={{ width: '100%', height: 370 }}> 
    <ResponsiveContainer>
    <ScatterChart
    width={500}
    height={400}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }}
  >
    <CartesianGrid vertical={false} horizontal={false} />
    <XAxis dataKey="name" />
    <YAxis dataKey="y" ticks={[0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} domain={[1, 10]} unit=" Hours" />
    <ZAxis type="number" interval={2} range={[0]} />
    <Tooltip cursor={{ strokeDasharray: "10 10" }} />
    <Legend />
    <Scatter 
      data={data}
      strokeWidth={3} 
      stroke="#1f77b4" 
      fill="#1f77b4" 
      line
      activeDot={{ r: 5 }}  
    /> 
  </ScatterChart> 
  </ResponsiveContainer>
  </div>
  ); 
}
export default AverageProtectedHours  