import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useState } from "react";

function SidebarButtonDropdownHOC({
  Button,
  Dropdown,
  dropdownProps,
  buttonProps,
}) {
  const [isOn, setOn] = useState(false);
  const elemRef = OutsideClickDetector(() => setOn(false));

  const dropdownToggler = () => {
    setOn((val) => !val);
  };

  return (
    <Button onClick={dropdownToggler} ref={elemRef} {...buttonProps}>
      <Dropdown state={[isOn, setOn]} ref={elemRef} {...dropdownProps} />
    </Button>
  );
}

export default SidebarButtonDropdownHOC;
