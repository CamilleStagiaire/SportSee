import ButtonWithIcon from '../ButtonWithIcon';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';

const UserInfos = ({ keyData }) => {
  return (
    <ul>
      <li>
        
        <ButtonWithIcon svgIcon={<img src={CaloriesSvg} alt="Calories" />} />
        <div>
          <h4>{keyData.calorieCount}KCal</h4>
          <p>Calories</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={ProteinesSvg} alt="Proteines" />} />
        <div>
          <h4>{keyData.proteinCount}g</h4>
          <p>Protéines</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={GlucidesSvg} alt="Glucides" />} />
        <div>
          <h4>{keyData.carbohydrateCount}g</h4>
          <p>Glucides</p>
        </div>
      </li>
      <li>
        <ButtonWithIcon svgIcon={<img src={LipidesSvg} alt="Lipides" />} />
        <div>
          <h4>{keyData.lipidCount}g</h4>
          <p>Lipides</p>
        </div>
      </li>
    </ul>
  );
};


export default UserInfos;
