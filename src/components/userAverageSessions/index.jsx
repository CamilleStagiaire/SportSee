import { ReferenceArea, ResponsiveContainer, LineChart, YAxis, Tooltip, Line } from 'recharts';
import { useState } from 'react';
import SCSS_COLORS from '../../sass/utils/variables.scss';

const COLORS = {
    STROKE: SCSS_COLORS.red1,
};

const dayMap = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
};

const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
        return (
            <div className="tooltip-lineChart" style={{backgroundColor: 'white', border: '1px solid #8884d8', padding: '10px'}}>
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
};

const UserAverageSessions = ({ data }) => {
  console.log(data)

  const [hoveredData, setHoveredData] = useState(null);
  console.log(hoveredData);
    
    const yDomain = [dataMin => dataMin - 10, dataMax => dataMax + 10];

    return (
        <div className="lineChart graph" style={{ position: 'relative' }}>
            <div className="lineChart-legend" style={{ listStyleType: 'none', paddingLeft: '10px', position: 'absolute', top: '10px' }}>
                Durée moyenne des sessions
            </div>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', justifyContent: 'space-between', width: '90%' }}>
    {Object.values(dayMap).map((day, index) => (
        <span key={index}>{day}</span>
    ))}
</div>

<ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} 
    margin={{ left: 0, right: 0 }}
    onMouseMove={e => {
        console.log("Mouse moving over the chart");
        if (e.isTooltipActive) {
            setHoveredData(e.activePayload[0].payload);
        }
    }}
    onMouseLeave={() => setHoveredData(null)}>
        <YAxis dataKey="sessionLength" hide={true} domain={yDomain} />
       

        <Tooltip content={<CustomTooltip />} position={{ y: 0 }} cursor={{stroke: COLORS.STROKE, strokeWidth: 10}} />
        <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="#8884d8"
            dot={false}
        />
        
        {
            hoveredData && (
                <ReferenceArea x1={1} x2={7} fillOpacity={0.7} fill="#ff0000"/>
            )
        }
       
    </LineChart>
</ResponsiveContainer>


        </div>
    );
};

export default UserAverageSessions;
