import React from "react";

const Input = ({
  name,
  id,
  type,
  value,
  label,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        className="form-control"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
