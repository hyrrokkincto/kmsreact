import React, { PureComponent } from 'react';
import { ScatterChart,
  Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';

const data = [
  { name: '14 April', y: 3 },
  { name: '15 April', y: 1 },
  { name: '16 April', y: 4 },
  { name: '17 April', y: 3 },
  { name: '18 April', y: 6 },
  { name: '19 April', y: 3 }
];


const TotalUnProtectedHours = () =>{  
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
      <Tooltip cursor={{ strokeDasharray: "10 10" }} />
      <Legend />
      <Scatter 
        data={data}
        strokeWidth={3} 
        stroke="#d62728" 
        fill="#d62728" 
        line
        activeDot={{ r: 5 }}  
      /> 
    </ScatterChart> 
    </ResponsiveContainer>
    </div>
    ); 
}
export default TotalUnProtectedHours  

