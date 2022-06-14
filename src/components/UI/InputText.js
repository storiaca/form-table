import React from "react";

const InputText = ({ name, id, type, value, label, onChange }) => {
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
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
