import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
  FILL: SCSS_COLORS.red2,
  TICKS: SCSS_COLORS.white,
};

/**
 * Transformer les données pour être utilisées dans le RadarChart
 * @param {object} data
 * @returns {Array}
 */
const transformData = ({ data }) => {
  const translationData = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };

  const order = [6, 5, 4, 3, 2, 1];

  return order.map((key) => ({
    kind: translationData[key],
    value: data.find((item) => item.kind === key).value,
  }));
};

/**
 * Composant principal du RadarChart
 * @param {object} data
 * @returns {React.Element}
 */
const UserPerformance = ({ data }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer className="graph" width="100%" height="100%">
      <RadarChart className="radarChart graph" cx="50%" cy="50%" outerRadius="60%" data={transformedData} >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: COLORS.TICKS }} />
        <Radar name="User" dataKey="value" stroke="none" className="radar-chart" fill={COLORS.FILL} fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UserPerformance;
