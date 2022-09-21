import React from "react";
import styles from "scss/components/ChatBody.module.scss";
import ChatMessage from "./ChatMessage";

function ChatBody() {
  return (
    <div className={`${styles.wrapper}`}>
      <ChatMessage
        time="12 Sep | 6:06 AM"
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage
        time="12 Sep | 6:06 AM"
        userProfileImg="peoples/user1.png"
        chat="This is my message"
        isUser={true}
      />
      <ChatMessage
        time="12 Sep | 6:06 AM"
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage time="12 Sep | 6:06 AM" chat="This is my message" />
      <ChatMessage time="12 Sep | 6:06 AM" chat="This is my message" />

      <ChatMessage
        time="12 Sep | 6:06 AM"
        isUser={true}
        userProfileImg="peoples/user1.png"
        chat="This is my message"
      />
      <ChatMessage
        time="12 Sep | 6:06 AM"
        isUser={true}
        chat="This is my message"
      />
      <ChatMessage
        time="12 Sep | 6:06 AM"
        isUser={true}
        chat="This is my message This is my message This is my message"
      />
    </div>
  );
}

export default ChatBody;
