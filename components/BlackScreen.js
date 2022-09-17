import React from "react";
import { useSelector } from "react-redux";

function BlackScreen() {
  const { show } = useSelector((state) => state.blackScreenState);

  return <div className={`black-screen ${show ? "show" : ""}`}></div>;
}

export default BlackScreen;
