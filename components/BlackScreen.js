import React from "react";
import { useSelector } from "react-redux";

function BlackScreen({ showScreen = false }) {
  const { show } = useSelector((state) => state.blackScreenState);

  return (
    <div className={`black-screen ${show || showScreen ? "show" : ""}`}></div>
  );
}

export default BlackScreen;
