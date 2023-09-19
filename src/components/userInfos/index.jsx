import ButtonWithIcon from '../../components/button';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';



const UserInfos = ({ keyData }) => {

  return (
    <ul>
      <li>
      <ButtonWithIcon label={`Calories: ${keyData.calorieCount}`} svgIcon={<img src={CaloriesSvg} alt="Calories" />} />
      </li>
      <li>
      <ButtonWithIcon label={`Proteines: ${keyData.proteinCount}`} svgIcon={<img src={ProteinesSvg} alt="Proteines" />} />
      </li>
      <li>
      <ButtonWithIcon label={`Glucides: ${keyData.carbohydrateCount}`} svgIcon={<img src={GlucidesSvg} alt="Glucides" />} />
      </li>
      <li>
      <ButtonWithIcon label={`Lipides: ${keyData.lipidCount}`} svgIcon={<img src={LipidesSvg} alt="Lipides" />} />
      </li>
    </ul>
  );
};

export default UserInfos;
