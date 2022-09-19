import React from "react";
import styles from "scss/components/LabeledInput.module.scss";

const LabeledInput = ({ label, placeholder, type, id = "123", error }) => {
  return (
    <div className={styles.labledInput}>
      <label
        htmlFor={id}
        className="fs-18px black weight-5 w-fit-content block pointer mb-15px"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${error ? styles.error : ""} fs-18px black weight-5`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabeledInput;
