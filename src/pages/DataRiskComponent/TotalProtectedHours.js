import React, { PureComponent } from 'react';
import { ScatterChart,
  Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '14 April', y: 1 },
  { name: '15 April', y: 3 },
  { name: '16 April', y: 5 },
  { name: '17 April', y: 2 },
  { name: '18 April', y: 4 },
  { name: '19 April', y: 1 }
];


const TotalProtectedHours = () =>{  
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
      <XAxis dataKey="name" name="stature" />
      <YAxis dataKey="y" name="weight" unit="Hours" />
      <ZAxis type="number" range={[0]} />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter 
        data={data}
        strokeWidth={3} 
        stroke="#ff7f0e" 
        fill="#ff7f0e" 
        line
        activeDot={{ r: 5 }}  
      /> 
    </ScatterChart> 
    </ResponsiveContainer>
    </div>
    ); 
}
export default TotalProtectedHours  

