import { Legend, ResponsiveContainer, RadialBarChart, RadialBar, Cell } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
  SCORE: SCSS_COLORS.red1,
  CIRCLE: SCSS_COLORS.white,
};

/**
 * Légende personnalisée
 * @returns {React.Element} 
 */
const CustomLegend = () => {
  return <div className="radialBarChart-legend"> Score </div>;
};

/**
 * Composant principal du RadialBarChart
 * @param {number} props.score
 * @returns {React.Element}
 */
const UserScore = ({ score }) => {
  const data = [
    { name: 'Score', value: score * 100 },
    { name: 'Rest', value: 100 }
  ];

  return (
    <div className="radialBarChart graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="70%" outerRadius="90%" data={data} startAngle={90} endAngle={90 + 360} >
           <circle cx="50%" cy="50%" r="31%" fill={COLORS.CIRCLE} />
          <RadialBar dataKey="value"  cornerRadius={10} clockWise={true} >
            <Cell key="score" fill={COLORS.SCORE} stroke="none" />
            <Cell key="rest" fill="transparent" stroke="none" /> 
          </RadialBar>
         
          <text x="50%" y="45%" dy={5} textAnchor="middle">
            <tspan className="radialBarChart-percentage"> {`${Math.round(score * 100)}%`} </tspan>
            <tspan x="50%" dy={20} className="radialBarChart-text">  de votre  </tspan>
            <tspan x="50%" dy={20} className="radialBarChart-text">  objectif  </tspan>
          </text>
          <Legend content={<CustomLegend />} verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserScore;

