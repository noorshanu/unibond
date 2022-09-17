import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useRef, useState } from "react";
import CommentsDropdown from "./CommentsDropdown";
import IconButton from "./IconButton";

function CommentsIcon() {
  const [isOn, setOn] = useState(false);
  const elemRef = OutsideClickDetector(() => setOn(false));

  const userDropdownHandler = () => {
    setOn((val) => !val);
  };
  return (
    <IconButton
      icon="images/icons/commentsIcon.svg"
      onClick={userDropdownHandler}
      ref={elemRef}
    >
      <CommentsDropdown state={[isOn, setOn]} ref={elemRef} />
    </IconButton>
  );
}

export default CommentsIcon;
