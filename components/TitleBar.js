import React from "react";
import styles from "scss/components/TitleBar.module.scss";

function TitleBar({ title }) {
  return (
    <div className={styles.wrapper}>
      <h1 className="black fs-36px weight-6">{title}</h1>
    </div>
  );
}

export default TitleBar;
