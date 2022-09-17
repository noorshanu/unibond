import Link from "next/link";
import React from "react";
import styles from "scss/layout/SidebarLeft.module.scss";
import { IoClose } from "react-icons/io5";
import IconButton from "components/IconButton";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import SidebarFooter from "./SidebarFooter";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "reduxState/slices/themeSlice";
import { useEffect } from "react";

function SidebarLeft(props) {
  const [state, stateSetter] = props.state;
  const leftSidebarRef = OutsideClickDetector(() => stateSetter(false));
  const { isDark } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const themeChanger = () => {
    dispatch(toggleTheme(!isDark));
  };

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
        className={`${styles.sidebarLeft} ${state ? styles.open : ""}`}
        ref={leftSidebarRef}
      >
        <header>
          <IconButton icon="icons/moonIcon.svg" onClick={themeChanger} />
          <button
            className={styles.closeBtn}
            onClick={() => stateSetter(false)}
          >
            <IoClose />
          </button>
        </header>

        <main>
          <Link href="/" passHref>
            <a href="" className={`fs-16px black weight-6 ${styles.active}`}>
              Dashboard
            </a>
          </Link>
          <Link href="/" passHref>
            <a href="" className="fs-16px black weight-6">
              Home
            </a>
          </Link>
          <Link href="/services" passHref>
            <a href="" className="fs-16px black weight-6">
              Services
            </a>
          </Link>
          <Link href="/" passHref>
            <a href="" className="fs-16px black weight-6">
              Blog
            </a>
          </Link>
          <Link href="/" passHref>
            <a href="" className="fs-16px black weight-6">
              Community
            </a>
          </Link>
          <Link href="/location" passHref>
            <a href="" className="fs-16px black weight-6">
              Address
            </a>
          </Link>
          <Link href="/" passHref>
            <a href="" className="fs-16px black weight-6">
              Payment
            </a>
          </Link>
        </main>

        <SidebarFooter className={styles.footer} />
      </div>
    </div>
  );
}

export default SidebarLeft;
