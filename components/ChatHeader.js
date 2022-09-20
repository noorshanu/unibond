import React from "react";
import styles from "scss/components/ChatHeader.module.scss";
import UserCard from "./UserCard";

function ChatHeader() {
  return (
    <div className={styles.chat_header}>
      <UserCard
        notify={true}
        img="peoples/user1.png"
        name="Mike Taylor"
        skill="Solidity Expert"
        // skill="...Typing"
        titleFontSize="fs-18px"
        titleSpacing=".4em"
        iconStyles={{
          minWidth: "3.2rem",
          height: "3.2rem",
        }}
      />
    </div>
  );
}

export default ChatHeader;
