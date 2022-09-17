import React from "react";
import styles from "scss/components/FlipCard.module.scss";

function FlipCard(props) {
  return (
    <div>
      <div className={`${styles.flipCardWrapper}`}>
        <div className={styles.flipCardInner}>
          <div className={styles.frontCard}>{props.frontCard}</div>
          <div className={styles.backwardCard}>{props.backCard}</div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
