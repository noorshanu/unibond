import React from "react";
import ChatLayout from "./ChatLayout";
import styles from "scss/components/ChatModel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleModel } from "reduxState/slices/chatModel";

function ChatModel({ bg, HeaderRightComponent }) {
  const { modelState } = useSelector((state) => state.chatModel);
  const dispatch = useDispatch();
  const boxRef = OutsideClickDetector(() => dispatch(toggleModel(false)));

  return (
    <div className={`${styles.model} ${modelState && styles.showing}`}>
      <div className={styles.box} ref={boxRef}>
        <ChatLayout
          bg={bg && bg}
          HeaderRightComponent={HeaderRightComponent && HeaderRightComponent}
        />
      </div>
    </div>
  );
}

export default ChatModel;
