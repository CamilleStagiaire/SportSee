import ButtonWithIcon from '../ButtonWithIcon';

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