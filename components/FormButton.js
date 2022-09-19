import React from "react";

function FormButton({ title, className, type = "submit" }) {
  return (
    <button
      type={type}
      className={`form-button ${className} fs-16px yellow weight-6 pointer`}
    >
      {title}
    </button>
  );
}

export default FormButton;
