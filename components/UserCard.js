import React from "react";
import styles from "scss/components/UserCard.module.scss";
import IconButton from "./IconButton";

function UserCard({
  img,
  notify,
  name,
  skill,
  iconStyles,
  titleFontSize,
  subtitleFontSize,
  titleSpacing = ".3em",
  rounded = false,
}) {
  return (
    <div className={`${styles.card} ${name && skill ? styles.spacing : ""}`}>
      <IconButton
        rounded={rounded ? rounded : null}
        img={img}
        notify={notify}
        style={iconStyles ? iconStyles : null}
      />
      <div>
        {name ? (
          <h2
            style={{ marginBottom: titleSpacing }}
            className={`${
              titleFontSize ? titleFontSize : "fs-14px"
            } weight-7 black lh-1`}
          >
            {name}
          </h2>
        ) : null}
        {skill ? (
          <p
            className={`${
              subtitleFontSize ? subtitleFontSize : "fs-12px"
            } black weight-4 lh-1`}
          >
            {skill}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default UserCard;
