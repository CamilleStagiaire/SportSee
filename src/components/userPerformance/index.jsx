import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

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

const UserPerformance = ({ data }) => {
    const transformedData = transformData(data);
    console.log('transformateData :', transformedData);

    return (
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={transformedData} width={300} height={300}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis tick={false}  />
            <Radar name="User" dataKey="value" stroke="none" className="radar-chart" fillOpacity={0.6} />
        </RadarChart>
    );
};

export default UserPerformance;
