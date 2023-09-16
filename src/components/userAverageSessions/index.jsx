import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const dayMap = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};

const UserAverageSessions = ({ data }) => (
  <div style={{ backgroundColor: 'red', height: '263px', padding: '10px' }}>
    <h3>Durée moyenne des sessions</h3>
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="day" tickFormatter={(tick) => dayMap[tick]} />
      <YAxis dataKey="sessionLength" hide = {true}/>
      <Tooltip />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  </div>
);

export default UserAverageSessions;
