import ButtonWithIcon from '../ButtonWithIcon';

/**
 * Composant Card affichant les informations
 * @param {string} props.svg
 * @param {string} props.alt
 * @param {string} props.color
 * @param {number} props.value
 * @param {string} props.title
 * @returns {React.Element}
 */
const Card = ({ svg, alt, color, value, title }) => (
  <div className="card">
    <ButtonWithIcon svgIcon={<img src={svg} alt={alt} />} color={color} />
    <div className="infos-btn">
      <h4 className="infos-btn-value">{value}</h4>
      <p className="infos-btn-title">{title}</p>
    </div>
  </div>
);

export default Card;
