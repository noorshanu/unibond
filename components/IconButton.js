import OutsideClickDetector from "hooks/OutsideClickDetector";
import { IKImage } from "imagekitio-react";
import { forwardRef } from "react";
import styles from "scss/components/IconButton.module.scss";

const IconButton = forwardRef((props, ref) => {
  const {
    icon,
    img,
    notify = false,
    children,
    onClick,
    className,
    wrapperClassName,
  } = props;

  return (
    <div ref={ref} className={`relative ${wrapperClassName} `}>
      <div
        className={`${styles.button} ${className} relative`}
        onClick={onClick ? onClick : null}
        disabled={onClick ? false : true}
      >
        {icon ? (
          <div className={styles.iconWrap}>
            {notify ? <div className={styles.notficationCircle}></div> : ""}
            <IKImage
              path={icon}
              alt=""
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
        ) : (
          <>
            {notify ? <div className={styles.notficationCircle}></div> : ""}
            <IKImage path={img} alt="" loading="lazy" lqip={{ active: true }} />
          </>
        )}
      </div>

      {children}
    </div>
  );
});

IconButton.displayName = "IconButton";

export default IconButton;
