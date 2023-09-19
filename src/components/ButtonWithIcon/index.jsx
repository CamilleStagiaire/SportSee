import React from 'react';

const ButtonWithIcon = ({ svgIcon }) => {
  return (
    <button className="button-with-icon">
      {svgIcon}
    </button>
  );
};

export default ButtonWithIcon;
