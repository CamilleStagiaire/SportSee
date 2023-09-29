const ButtonWithIcon = ({ svgIcon, color }) => {
  return (
    <button className="button-with-icon" style={{ backgroundColor: color }}>
      {svgIcon}
    </button>
  );
};

export default ButtonWithIcon;
