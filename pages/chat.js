import React from "react";
import Dashboardlayout from "layouts/DashboardLayout";
import ChatLayout from "components/ChatLayout";

function Chat() {
  return (
    <Dashboardlayout pagename="chat">
      <ChatLayout />
    </Dashboardlayout>
  );
}

export default Chat;
