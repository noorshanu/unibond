import React, { useEffect, useState } from "react";
import styles from "scss/components/AnimatedWrappingCards.module.scss";
import { motion } from "framer-motion";
import CompanyProgressCard from "./CompanyProgressCard";

export default function AnimatedWrappingCards() {
  const [state, setState] = useState("null");

  const box1Variant = {
    initial: {
      height: "90%",
      zIndex: 10,
    },
    hover: {
      height: "100%",
      zIndex: 4,
      transition: {
        height: { delay: 0.6 },
        zIndex: {
          delay: 0.4,
        },
      },
    },
  };

  const box2Variant = {
    initial: {
      height: "100%",
      zIndex: 4,
      rotateX: 0,
      // skewY: 0,
    },
    hover: {
      height: ["100%", "90%"],
      y: [0, -100, 0],
      // skewY: [0, 20, 0],
      rotateX: [0, 80, 0],
      zIndex: 10,
      transition: {
        zIndex: {
          delay: 0.5,
        },
      },
    },
  };

  useEffect(() => {
    if (!state) {
      setTimeout(() => {
        setState(true);
      }, 3000);
    } else {
      setTimeout(() => {
        setState(false);
      }, 3000);
    }
  });

  const checkState = (isTrue) => {
    if (state === true) {
      return isTrue ? box1Variant : box2Variant;
    } else if (state === false) {
      return isTrue ? box2Variant : box1Variant;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.AnimatedWrappingCards}>
      <div className={styles.mainBox}>
        <motion.div
          variants={checkState()}
          initial="initial"
          animate="hover"
          className={styles.box1}
        >
          <CompanyProgressCard
            title="Total Audit Ongoing"
            subtitle="05"
            inWeek="8"
            iconWidth="4rem"
            icon="icons/total-audit-icon.png"
            style={{ height: "100%" }}
          />
        </motion.div>
        <motion.div
          variants={checkState(true)}
          initial="initial"
          animate="hover"
          className={styles.box2}
        >
          <CompanyProgressCard
            title="Total Audit Ongoing"
            subtitle="05"
            inWeek="8"
            iconWidth="4rem"
            icon="icons/total-audit-icon.png"
            style={{ height: "100%" }}
            isYellowCard={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
