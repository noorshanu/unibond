import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "reduxState/slices/themeSlice";

const ReduxStateProvider = () => {
  const { isDark } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDark == true) {
      // Set value of  darkmode to dark
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
      return;
    }

    // Set value of  darkmode to light
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.setItem("theme", "light");
  }, [isDark]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    // setDarkTheme(initialColorValue === "dark");
    dispatch(toggleTheme(initialColorValue === "dark"));
  }, []);

  return null;
};

export default ReduxStateProvider;
