import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const UserActivity = ({ data }) => {

const minKg = Math.min(...data.map(d => d.kilogram));
const maxKg = Math.max(...data.map(d => d.kilogram));

const kgDomain = [minKg - 1, maxKg + 1];
const minTick = minKg - 2;
const maxTick = maxKg + 1;
const middleTick = Math.round((minTick + maxTick) / 2);

const barColor1 = "#282D30";
const barColor2 = "#E60000";

  return (
    <div className="bart-chart">
    <h1 className="bart-chart-title" style={{ fontSize: '18px', textAlign: 'left' }}>
      Activités quotidiennes
    </h1>
    <BarChart width={600} height={220} data={data}>
  
      <CartesianGrid vertical={false} strokeDasharray="1 1"/>
      <XAxis dataKey="day" tickFormatter={(tick) => tick.split("-")[2].substring(1)} />
      <YAxis yAxisId="left" orientation="right" domain={kgDomain} ticks={[minTick, middleTick, maxTick]} />
      <YAxis yAxisId="right" orientation="left" hide = {true}/> 
      
      <Bar yAxisId="left" dataKey="kilogram" fill={barColor1} barSize={7} radius={[50, 50, 0, 0]} /> 
      <Bar yAxisId="right" dataKey="calories" fill={barColor2} barSize={7} radius={[50, 50, 0, 0]} />

      <Legend className="bart-chart-legend"
        verticalAlign="top"
        wrapperStyle={{ lineHeight: '40px'}}
        payload={[
          { value: 'Poids (kg)', type: 'circle', id: 'kilogram', color: barColor1 },
          { value: 'Calories brûlées (kCal)', type: 'circle', id: 'calories', color: barColor2 }
        ]}
      />
      <Tooltip />
    </BarChart>
    </div>
  );
};

export default UserActivity;