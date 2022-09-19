import React from "react";
import styles from "scss/components/FormButton.module.scss";

function FormButton({ title }) {
  return (
    <button
      type="submit"
      className={`${styles.button} fs-16px yellow weight-6 pointer`}
    >
      {title}
    </button>
  );
}

export default FormButton;
