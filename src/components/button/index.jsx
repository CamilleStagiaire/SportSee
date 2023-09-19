const ButtonWithIcon = ({ label, svgIcon }) => {
  return (
    <button className="button-with-icon">
      {svgIcon && <span className="button-icon">{svgIcon}</span>}
      {label}
    </button>
  );
};

export default ButtonWithIcon;
