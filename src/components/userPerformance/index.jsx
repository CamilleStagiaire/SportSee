import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const transformData = ({ data }) => {
        const translationMap = {
        1: 'Cardio',
        2: 'Énergie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
    };

    return data.map(item => ({
        subject: translationMap[item.kind] || item.kind,
        value: item.value
    }));
};

// const CustomTick = (props) => {
//     const { x, y, payload } = props;
    
//     return (
//         <text x={x} y={y} dy={10} dx={0}  textAnchor="middle" fill="#666" fontSize="0.7em">
//             {payload.value}
//         </text>
//     );
// };

const UserPerformance = ({ data }) => {
    const transformedData = transformData(data);
    console.log('transformateData :', transformedData);

    return (
        <ResponsiveContainer className="graph" width="100%" height="100%">
            <RadarChart className="radar graph" cx="50%" cy="50%" outerRadius="55%" data={transformedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" dx= {-5}  tick={{ fontSize: 10 }}/>
                <PolarRadiusAxis tick={false}  />
                <Radar name="User" dataKey="value" stroke="none" className="radar-chart" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
    
};

export default UserPerformance;
