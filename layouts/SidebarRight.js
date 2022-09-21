import IconButton from "components/IconButton";
import React, { useEffect } from "react";
import styles from "scss/layout/SidebarRight.module.scss";

import { IoClose } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import SidebarFooter from "./SidebarFooter";

function SidebarRight(props) {
  const [state, stateSetter] = props.state;
  const sidebarRef = OutsideClickDetector(() => stateSetter(false));

  useEffect(() => {
    if (state) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [state]);

  return (
    <div
      className={`${styles.wrapper} ${
        state ? styles.wrapperShowing : null
      } custom-scrollbar`}
    >
      <div
        className={` ${styles.sidebar} ${state ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <header>
          <button
            className={styles.closeBtn}
            onClick={() => stateSetter(false)}
          >
            <IoClose />
          </button>
          <IconButton img="peoples/user.png"></IconButton>
        </header>

        <main>
          <Link href="/chat" passHref>
            <a href="">
              <span className="fs-16px black weight-6">Messages</span>
              <IconButton
                wrapperClassName={styles.sidebarlinkIcon}
                icon="icons/commentsIcon.svg"
              />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <span className="fs-16px black weight-6">Notification</span>
              <IconButton
                wrapperClassName={styles.sidebarlinkIcon}
                icon="icons/BellIcon.svg"
                notify={true}
              />
            </a>
          </Link>
          <Link href="/profile" passHref>
            <a>
              <span className="fs-16px black weight-6">My Account</span>
            </a>
          </Link>
          <Link href="/orders" passHref>
            <a>
              <span className="fs-16px black weight-6">My Orders</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.logoutBtn}>
              <span className="fs-16px black weight-6">Log Out</span>
            </a>
          </Link>
        </main>

        <SidebarFooter className={styles.footer} />
      </div>
    </div>
  );
}

export default SidebarRight;
