import { Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
  SCORE: SCSS_COLORS.red1,
  CIRCLE: SCSS_COLORS.white,
};

const CustomLegend = () => {
  return <div className="pieChart-legend"> Score </div>;
};

const UserScore = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: 100 - score * 100 },
  ];

  return (
    <div className="pieChart graph">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie dataKey="value" cx="50%" cy="50%" outerRadius={75} data={[{ value: 100 }]} fill={COLORS.CIRCLE} paddingAngle={0} />
          <Pie data={data}  cx="50%" cy="50%" innerRadius={75} outerRadius={85} dataKey="value" startAngle={-270} endAngle={90} cornerRadius={10} >
            <Cell fill={COLORS.SCORE} stroke="none" />
            <Cell fill="transparent" stroke="none" />
          </Pie>
          <text x="50%" y="45%" dy={5} textAnchor="middle">
            <tspan className="pieChart-percentage"> {`${Math.round(score * 100)}%`} </tspan>
            <tspan x="50%" dy={20} className="pieChart-text">  de votre  </tspan>
            <tspan x="50%" dy={20} className="pieChart-text">  objectif  </tspan>
          </text>
          <Legend content={<CustomLegend />} verticalAlign="top" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserScore;
