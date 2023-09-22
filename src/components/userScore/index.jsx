import {ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const UserScore = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: 100 - (score * 100) },
  ];
  
  return (
    <div className="pieChart graph">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            cx="50%"
            cy="50%"
            data={[{ value: 100 }]}
            fill="#FFFFFF"
            paddingAngle={0}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={55}
            dataKey="value"
            startAngle={90}
          >
            <Cell fill="red" stroke="none" />
            <Cell fill="transparent" stroke="none" />
          </Pie>
          <text
            x="50%"
            y="50%"
            dy={5}
            textAnchor="middle"
            fill="black"
            style={{ fontSize: '14px', fontFamily: 'Arial' }}
          >
            {`${Math.round(score * 100)}% de votre objectif`}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
  
  
};

export default UserScore;
