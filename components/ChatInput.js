import React from "react";
import styles from "scss/components/ChatInput.module.scss";
import { AiOutlineSend } from "react-icons/ai";

function ChatInput() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Type a message"
          className={`${styles.input} fs-16px black weight-5`}
        />

        <button type="submit" className={styles.sendButton}>
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
