import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const transformData = ({ data, kind }) => {
    return data.map(item => ({
        subject: kind[item.kind],
        value: item.value,
    }));
};

const UserPerformance = ({ data }) => {
   // console.log('data',data);
    const transformedData = transformData(data);
   // console.log('transformateData',transformedData);

    return (
            <RadarChart cx="50%" cy="50%" outerRadius="50%" data={transformedData} width={300} height={300}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="User" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
    );
};

export default UserPerformance;
