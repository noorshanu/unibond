import SidebarButtonDropdownHOC from "HOC/SidebarButtonDropdownHOC";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "reduxState/slices/themeSlice";
import styles from "scss/components/SidebarHeader.module.scss";
import BellDropdown from "./BellDropdown";
import BellIcon from "./BellIcon";
import CommentsDropdown from "./CommentsDropdown";
import CommentsIcon from "./CommentsIcon";
import IconButton from "./IconButton";
import UserButton from "./UserButton";
import UserDropdown from "./UserDropdown";

function SidebarHeader() {
  const { isDark } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const themeChanger = () => {
    dispatch(toggleTheme(!isDark));
  };

  return (
    <div className={styles.wrapper}>
      <IconButton icon="icons/moonIcon.svg" onClick={themeChanger} />
      <SidebarButtonDropdownHOC
        Button={IconButton}
        Dropdown={CommentsDropdown}
        buttonProps={{
          icon: "icons/commentsIcon.svg",
        }}
      />
      <SidebarButtonDropdownHOC
        Button={IconButton}
        Dropdown={BellDropdown}
        buttonProps={{
          notify: true,
          icon: "icons/BellIcon.svg",
        }}
      />
      <SidebarButtonDropdownHOC
        Button={IconButton}
        Dropdown={UserDropdown}
        buttonProps={{
          img: "peoples/user.png",
        }}
      />
    </div>
  );
}

export default SidebarHeader;
