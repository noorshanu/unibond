import React from "react";
import styles from "scss/components/StatusSelector.module.scss";

const StatusSelector = ({ options }) => {
  return (
    <select id="lang" className={`${styles.statusSelector} fs-16px weight-5`}>
      {options.map((item, index) => {
        return (
          <option key={index} value={item.title} className="fs-16px weight-5">
            {item.title}
          </option>
        );
      })}
    </select>
  );
};

export default StatusSelector;
