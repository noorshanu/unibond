import React, { useState } from "react";
import IconButton from "./IconButton";
import UserDropdown from "./UserDropdown";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function UserButton() {
  const [isOn, setOn] = useState(false);

  const userDropdownHandler = () => {
    setOn(true);
  };

  return (
    <IconButton img="images/peoples/user.png" onClick={userDropdownHandler}>
      <UserDropdown state={[isOn, setOn]} />
    </IconButton>
  );
}

export default UserButton;
