import React, { useRef, useState } from "react";
import styles from "scss/components/ProfileAccordion.module.scss";
import { BiChevronDown } from "react-icons/bi";

function ProfileAccordion({ buttonTitle, children }) {
  const [open, setOpen] = useState(false);
  const accordionBodyRef = useRef(null);

  const toggler = () => {
    if (accordionBodyRef.current.clientHeight === 0) {
      accordionBodyRef.current.style.height =
        accordionBodyRef.current.scrollHeight + "px";
      setOpen(true);
    } else {
      accordionBodyRef.current.style.height = 0 + "px";
      setOpen(false);
    }
  };

  return (
    <div className={`${styles.accordion} ${open ? styles.active : null}`}>
      <button onClick={toggler} className="fs-24px">
        <p className="fs-inherit black weight-5">{buttonTitle}</p>
        <span className={`${styles.downIcon} black`}>
          <BiChevronDown />
        </span>
      </button>

      <main ref={accordionBodyRef}>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default ProfileAccordion;
