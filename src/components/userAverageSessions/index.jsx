import {Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Text } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
STROKE: SCSS_COLORS.red1,
};
const dayMap = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="tooltip-lineChart" style={{backgroundColor: 'white', border: '1px solid #8884d8', padding: '10px'}}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
};

const CustomLegend = () => {
  return (
      <div className="lineChart-legend" style={{ listStyleType: 'none', paddingLeft: 0 }}>
          ddd
      </div>
  );
};


const UserAverageSessions = ({ data }) => {
  return (
    <div className="lineChart graph">
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
        <Text x={50} y={20} fontSize={16} fontWeight="bold">Durée moyenne des sessions</Text>
          <XAxis 
            dataKey="day" 
            tickFormatter={(tick) => dayMap[tick]} 
            tickLine={false}
          
            stroke="#desiredColor"
           
          />
          <YAxis dataKey="sessionLength" hide={true}/>
          <Tooltip content={<CustomTooltip />} position={{ y: 0 }} cursor={{ stroke: COLORS.STROKE, strokeWidth: 2 }}/>
          <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="#8884d8"
            dot={false}
           // activeDot={{ r: 5 }}
          
          />
           <Legend content={<CustomLegend />} verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
);
  }
export default UserAverageSessions;