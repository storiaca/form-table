import React from "react";

const Button = ({ children, type, classType }) => {
  return (
    <button type={type} className={`btn btn-${classType}`}>
      {children}
    </button>
  );
};

export default Button;
