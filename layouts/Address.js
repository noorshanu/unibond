import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/layout/Address.module.scss";

function Address() {
  const isBellow640px = useMediaQuery("(max-width : 40em)");

  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.mapWrapper}>
          <IKImage
            path="images/map.png"
            className={styles.map}
            loading="lazy"
            lqip={{ active: true }}
            alt=""
          />
        </div>

        <div className={styles.location}>
          <IKImage
            path="icons/location-icon.svg"
            className={styles.locationIcon}
            loading="lazy"
            lqip={{ active: true }}
            alt=""
          />

          <p
            className={`white ${
              isBellow640px ? "fs-14px" : "fs-20px"
            } lh-1_4 weight-7`}
          >
            Sheikh Mohammed Bin Rashed Boulevard Downtown Dubai, P.O. Box 31166,
            Dubai, UAE
          </p>
        </div>
      </main>
    </div>
  );
}

export default Address;
