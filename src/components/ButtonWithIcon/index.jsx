/**
 * Composant bouton avec icône SVG
 * @param {React.ReactNode} props.svgIcon
 * @param {string} props.color
 * @returns {React.Element}}
 */
const ButtonWithIcon = ({ svgIcon, color }) => {
  return (
    <button className="button-with-icon" style={{ backgroundColor: color }}>
      {svgIcon}
    </button>
  );
};

export default ButtonWithIcon;
