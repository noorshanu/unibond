import React from "react";
import styles from "scss/components/ChatMessage.module.scss";
import IconButton from "./IconButton";

function ChatMessage({ isUser = false, chat, userProfileImg, time }) {
  return (
    <div className={`${styles.wrapper} ${isUser ? styles.reverse : false}`}>
      <div className={styles.userImg}>
        {userProfileImg ? (
          <IconButton img={userProfileImg} rounded={true} />
        ) : null}
      </div>
      <div className={styles.msgWrapper}>
        <div className={`${styles.msg}`}>
          <p className="fs-16px black weight-5">{chat}</p>
        </div>
        {time && (
          <p className={`${styles.time} weight-5 black fs-12px opacity-0_8`}>
            {time}
          </p>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
