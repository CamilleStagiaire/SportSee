import { useState } from 'react';
import { ReferenceArea, ResponsiveContainer, LineChart, YAxis, Tooltip, Line } from 'recharts';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
    STROKE: SCSS_COLORS.white,
    FILL: SCSS_COLORS.red3,
};

const DAY_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
        return (
            <div className="lineChart-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

const CustomDot = ({ cx, cy, payload, hoveredData }) => {
  if (hoveredData && payload.day === hoveredData.day) {
    return (
      <>
        <circle cx={cx} cy={cy} r={10} fill="white" opacity={0.3} />
        <circle cx={cx} cy={cy} r={4} fill="white" />
      </>
    );
  }
  return null;
};

const UserAverageSessions = ({ data }) => {
  const [hoveredData, setHoveredData] = useState(null);
  const yDomain = [(dataMin) => dataMin - 20, (dataMax) => dataMax + 20];

  return (
    <div className="lineChart graph">
      <div className="lineChart-legend">Durée moyenne des sessions</div>
      <div className="lineChart-days">
        {DAY_LABELS.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, right: 0 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive) {
              setHoveredData(e.activePayload[0].payload);
            }
          }}
          onMouseLeave={() => setHoveredData(null)}
        >
          <YAxis dataKey="sessionLength" hide={true} domain={yDomain} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke={COLORS.STROKE} dot={(props) => <CustomDot {...props} hoveredData={hoveredData} />} strokeWidth={2} />
           {hoveredData && (
            <ReferenceArea x1={hoveredData.day - 1} x2={hoveredData.day === 6 ? hoveredData.day : hoveredData.day + 1} fillOpacity={0.7} fill={COLORS.FILL} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAverageSessions;
