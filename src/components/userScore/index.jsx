import { PieChart, Pie, Cell } from 'recharts';

const UserScore = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: 100 - (score * 100) },
  ];
  
  return (
    <div className="pieChart">
         <h1 style={{ fontSize: '18px', textAlign: 'left' }}>
         {`${Math.round(score * 100)}% de votre objectif`}
    </h1>
      <PieChart width={120} height={120}>
      <Pie
          dataKey="value"
          cx={60}
          cy={60}
          data={[{ value: 100 }]}
          fill="#FFFFFF"
          paddingAngle={0}
        />
        <Pie
          data={data}
          cx={60}
          cy={60}
          innerRadius={45}
          outerRadius={55}
          dataKey="value"
          startAngle={90}
        >
          <Cell fill="red" stroke="none" />
          <Cell fill="transparent" stroke="none" />
        </Pie>
       
      </PieChart>
    </div>
  );
};

export default UserScore;
