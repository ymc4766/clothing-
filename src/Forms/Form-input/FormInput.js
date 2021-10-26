import React from "react";
import "./formInput-style.scss";

function FormInput({ inputChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={inputChange}
        {...otherProps}
        autoComplete="off"
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
