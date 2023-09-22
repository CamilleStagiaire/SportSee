import ButtonWithIcon from '../ButtonWithIcon';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';

const UserInfos = ({ keyData }) => {
  const caloriesColor = 'rgba(255, 0, 0, 0.1)';
  const proteinesColor = 'rgba(74, 184, 255, 0.1)';
  const glucidesColor = 'rgba(249, 206, 35, 0.1)';
  const lipidesColor = 'rgba(253, 81, 129, 0.1)';
  

  return (
    <ul>
      <li>
        <ButtonWithIcon svgIcon={<img src={CaloriesSvg} alt="Calories" />} color={caloriesColor} />
        <div className="infos-btn">
          <h4>{keyData.calorieCount}KCal</h4>
          <p>Calories</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={ProteinesSvg} alt="Proteines" />} color={proteinesColor} />
        <div className="infos-btn">
          <h4>{keyData.proteinCount}g</h4>
          <p>Protéines</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={GlucidesSvg} alt="Glucides" />} color={glucidesColor} />
        <div className="infos-btn">
          <h4>{keyData.carbohydrateCount}g</h4>
          <p>Glucides</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={LipidesSvg} alt="Lipides" />} color={lipidesColor} />
        <div className="infos-btn">
          <h4>{keyData.lipidCount}g</h4>
          <p>Lipides</p>
        </div>
      </li>
    </ul>
  );
};


export default UserInfos;
