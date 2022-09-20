import React from "react";
import styles from "scss/components/ChatBody.module.scss";
import ChatMessage from "./ChatMessage";

function ChatBody() {
  return (
    <div className={styles.wrapper}>
      <ChatMessage
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage
        userProfileImg="peoples/user1.png"
        chat="This is my message"
        isUser={true}
      />
      <ChatMessage
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage chat="This is my message" />
      <ChatMessage chat="This is my message" />

      <ChatMessage
        isUser={true}
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage isUser={true} chat="This is my message" />
      <ChatMessage isUser={true} chat="This is my message" />
    </div>
  );
}

export default ChatBody;
