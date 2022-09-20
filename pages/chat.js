import React from "react";
import Dashboardlayout from "layouts/DashboardLayout";
import styles from "scss/pages/Chat.module.scss";
import ChatHeader from "components/ChatHeader";
import ChatBody from "components/ChatBody";
import ChatInput from "components/ChatInput";

function Chat() {
  return (
    <Dashboardlayout pagename="chat">
      <div className={styles.wrapper}>
        <ChatHeader />
        <div className="relative">
          <ChatBody />
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </Dashboardlayout>
  );
}

export default Chat;
