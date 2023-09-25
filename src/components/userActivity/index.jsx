import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
  BARCHART_BG: SCSS_COLORS.red1,
  BAR1: SCSS_COLORS.black2,
  BAR2: SCSS_COLORS.red3,
  AXIS_TICK: SCSS_COLORS.grey3,
  XAXIS_STROKE: SCSS_COLORS.grey2,
};

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="tooltip-barChart">
        <p>{`${payload[0].value}Kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
};

const CustomLegend = ({ payload }) => (
  <div className="barChart-legend">
    <div className="barChart-legend-title">Activité quotidienne</div> 
    <div className="barChart-legend-items">
    {payload.map((entry, index) => (
      
        <div className="barChart-legend-item" key={`item-${index}`}>
        <svg width="16" height="16">
          <circle cx="8" cy="8" r="5" fill={entry.color} />
        </svg>
        <span>{entry.value}</span>
      </div>
     
    ))}
     </div>
  </div>
);


const UserActivity = ({ data }) => {
  const minKg = Math.min(...data.map(d => d.kilogram));
  const maxKg = Math.max(...data.map(d => d.kilogram));
  
  const kgDomain = [minKg - 1, maxKg + 1];
  const minTick = minKg - 2;
  const maxTick = maxKg + 1;
  const middleTick = Math.round((minTick + maxTick) / 2);

  return (
    <div className="dashboard-barChart">
      
      <ResponsiveContainer width="100%" height="100%">
    
      <BarChart data={data} barGap={8} barCategoryGap={1} style={{ backgroundColor: COLORS.BARCHART_BG }} margin={{ top: 20, left: 50, bottom:30, right:50 }}>
   
        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
        <XAxis dataKey="day" tickFormatter={(tick) => tick.split("-")[2].substring(1)} tick={{ dy: 20, fill: COLORS.AXIS_TICK }} stroke={COLORS.XAXIS_STROKE} tickLine={false} padding={{ left: -52, right: -52 }} />
        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number"  domain={kgDomain}  ticks={[minTick, middleTick, maxTick]} tick={{ fill: COLORS.AXIS_TICK }} axisLine={false} orientation="right" tickLine={false} dx={50} />
        <YAxis yAxisId="calories" dataKey="calories" type="number" hide={true}/>
        <Tooltip content={<CustomTooltip />} />
        <Bar yAxisId="kilogram" dataKey="kilogram" fill={COLORS.BAR1} barSize={7} radius={[50, 50, 0, 0]} />
        <Bar yAxisId="calories" dataKey="calories" fill={COLORS.BAR2} barSize={7} radius={[50, 50, 0, 0]} />
        <Legend content={<CustomLegend />} verticalAlign="top" wrapperStyle={{ lineHeight: '30px', paddingBottom: '50px' }} payload={[
          
          { value: 'Poids (kg)', type: 'circle', id: 'kilogram', color: COLORS.BAR1 },
          { value: 'Calories brûlées (kCal)', type: 'circle', id: 'calories', color: COLORS.BAR2 }
        ]}/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivity;
