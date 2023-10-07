import Card from '../Card';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';

/**
 * Afficher les informations de l'utilisateur sous forme de Card
 * @param {object} data 
 * @returns {React.Element}
 */
const UserInfos = ({ data }) => {
  const items = [
    { svg: CaloriesSvg, alt: "Calories", color: 'rgba(255, 0, 0, 0.1)', value: data.calorieCount + "KCal", title: "Calories" },
    { svg: ProteinesSvg, alt: "Proteines", color: 'rgba(74, 184, 255, 0.1)', value: data.proteinCount + "g", title: "Protéines" },
    { svg: GlucidesSvg, alt: "Glucides", color: 'rgba(249, 206, 35, 0.1)', value: data.carbohydrateCount + "g", title: "Glucides" },
    { svg: LipidesSvg, alt: "Lipides", color: 'rgba(253, 81, 129, 0.1)', value: data.lipidCount + "g", title: "Lipides" },
  ];

  return (
    <div className="cards">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default UserInfos;
