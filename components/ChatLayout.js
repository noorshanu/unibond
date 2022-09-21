import styles from "scss/components/ChatLayout.module.scss";
import ChatHeader from "components/ChatHeader";
import ChatBody from "components/ChatBody";
import ChatInput from "components/ChatInput";

function ChatLayout({ bg, HeaderRightComponent }) {
  return (
    <div className={styles.wrapper} style={{ "--_bg": bg ? bg : null }}>
      <ChatHeader
        RightComponent={HeaderRightComponent && HeaderRightComponent}
      />
      <div className="relative">
        <ChatBody />
      </div>
      <div>
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatLayout;
