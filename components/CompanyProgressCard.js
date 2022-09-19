import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";
import React from "react";
import { useSelector } from "react-redux";
import styles from "scss/components/CompanyProgressCard.module.scss";

function CompanyProgressCard({
  title,
  subtitle,
  bg = "white",
  iconWidth,
  icon,
  inWeek,
  textCenter = false,
  subtitleFontSize = "fs-36px",
  className,
  flipCard = false,
  isYellowCard = false,
  style,
}) {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const { isDark } = useSelector((state) => state.themeState);

  return (
    <div
      className={`${styles.card}  ${
        textCenter ? styles.textCenter : ""
      } ${className} ${isYellowCard ? styles.yellowCard : ""}`}
      style={{ backgroundColor: bg, ...style }}
    >
      <h2 className={`fs-14px black weight-6 lh-1_4`}>{title}</h2>
      <div className={styles.mainTitleWithIcon}>
        <h1 className={`black weight-8 lh-1 ${subtitleFontSize}`}>
          {subtitle}
        </h1>
        {icon ? (
          <IKImage
            path={icon}
            style={{ "--width": iconWidth }}
            className={styles.icon}
            loading="lazy"
            lqip={{ active: true }}
            alt=""
          />
        ) : null}
      </div>
      <p className={`${isDark ? "white" : "gray"} fs-12px weight-6`}>
        {inWeek} New This Week
      </p>
    </div>
  );
}

export default CompanyProgressCard;
