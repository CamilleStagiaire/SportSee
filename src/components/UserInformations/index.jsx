import ButtonWithIcon from '../ButtonWithIcon';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';

const UserInfos = ({ keyData }) => {
  const items = [
    { svg: CaloriesSvg, alt: "Calories", color: 'rgba(255, 0, 0, 0.1)', value: keyData.calorieCount + "KCal", label: "Calories" },
    { svg: ProteinesSvg, alt: "Proteines", color: 'rgba(74, 184, 255, 0.1)', value: keyData.proteinCount + "g", label: "Protéines" },
    { svg: GlucidesSvg, alt: "Glucides", color: 'rgba(249, 206, 35, 0.1)', value: keyData.carbohydrateCount + "g", label: "Glucides" },
    { svg: LipidesSvg, alt: "Lipides", color: 'rgba(253, 81, 129, 0.1)', value: keyData.lipidCount + "g", label: "Lipides" },
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ButtonWithIcon svgIcon={<img src={item.svg} alt={item.alt} />} color={item.color} />
          <div className="infos-btn">
            <h4 className="infos-btn-value">{item.value}</h4>
            <p className="infos-btn-title">{item.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserInfos;
