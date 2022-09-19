import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";
import React from "react";
import { useSelector } from "react-redux";
import styles from "scss/components/ServiceCard.module.scss";

const SkillCard = ({ text }) => {
  return (
    <div className={`${styles.skillCard} gray fs-8px weight-6`}>{text}</div>
  );
};

function ServiceCard({
  title,
  icon,
  iconClass = "two",
  fontSize = "fs-30px",
  style,
}) {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)");
  const { isDark } = useSelector((state) => state.themeState);

  return (
    <div
      className={`${styles.card} ${isDark ? styles.dark : ""}`}
      style={style}
    >
      <IKImage
        path="images/triangleBlob.png"
        className={styles.blob}
        loading="lazy"
        lqip={{ active: true }}
        alt=""
      />
      <h1 className={`fs-20px mb-20px weight-8 black ${styles.title}`}>
        {title}
      </h1>

      <div className={styles.skills}>
        <SkillCard text="Focused Designs" />
        <SkillCard text="Experienced Team" />
        <SkillCard text="User Research" />
      </div>

      <IKImage
        path={icon}
        className={`${iconClass} ${styles.card_img}`}
        loading="lazy"
        lqip={{ active: true }}
        alt=""
      />
    </div>
  );
}

export default ServiceCard;
