import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const UserActivity = ({ data }) => {

const minKg = Math.min(...data.map(d => d.kilogram));
const maxKg = Math.max(...data.map(d => d.kilogram));
const maxCal = Math.max(...data.map(d => d.calories));

// les domaines
const kgDomain = [minKg - 1, maxKg + 1];
const calDomain = [0, Math.ceil(maxCal / 100) * 100];

  return (
    <div>
    <h1 style={{ fontSize: '18px', textAlign: 'left' }}>
      Activités quotidiennes
    </h1>
    <BarChart width={600} height={300} data={data}>
  
      <CartesianGrid vertical={false} strokeDasharray="1 1"/>
      <XAxis dataKey="day" tickFormatter={(tick) => tick.split("-")[2].substring(1)} />
      
      <YAxis yAxisId="left" orientation="right" domain={kgDomain} ticks={[minKg - 2, minKg, minKg + 2]} /> 
      <YAxis yAxisId="right" orientation="left" domain={calDomain} hide = {true}/> 
      
      <Bar yAxisId="left" dataKey="kilogram" fill="#82ca9d" barSize={10} /> 
      <Bar yAxisId="right" dataKey="calories" fill="#8884d8" barSize={10} />

      <Legend 
        verticalAlign="top"
        wrapperStyle={{ lineHeight: '40px'}}
        payload={[
          { value: 'Poids (kg)', type: 'circle', id: 'kilogram', color: '#82ca9d' },
          { value: 'Calories brûlées (kCal)', type: 'circle', id: 'calories', color: '#8884d8' }
        ]}
      />
      <Tooltip />
    </BarChart>
    </div>
  );
};

export default UserActivity;