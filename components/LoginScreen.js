import React from "react";
import styles from "scss/components/LoginScreen.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleState as toggleLoginScreenState } from "reduxState/slices/loginScreenSlice";
import { toggleState as toggleBlackScreenState } from "reduxState/slices/blackScreenSlice";

function LoginScreen() {
  const { show } = useSelector((state) => state.loginScreenState);
  const dispatch = useDispatch();
  const menuRef = OutsideClickDetector(() => {
    if (show) {
      dispatch(toggleLoginScreenState(false));
      dispatch(toggleBlackScreenState(false));
      console.log("Clicked");
      return;
    }
  });

  return (
    <div
      className={`login-form ${styles.screen} ${show ? styles.show : ""}`}
      ref={menuRef}
    >
      <h1 className="fs-40px weight-7 black mb-30px">Login</h1>

      <form>
        <main>
          <div>
            <label htmlFor="userId" className="unchange-gray fs-16px weight-5">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="unchange-gray fs-16px weight-5"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="unchange-gray fs-16px weight-5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="unchange-gray fs-16px weight-5"
            />
          </div>
        </main>
        <p className="unchange-gray fs-10px weight-7">
          By logging in you agree to our privacy policy.
        </p>

        <footer>
          <button
            type="submit"
            className={`${styles.loginBtn} white fs-16px weight-6 pointer`}
          >
            <span>Login Now</span>{" "}
            <span className={styles.icon}>
              <MdKeyboardArrowRight />
            </span>
          </button>
          <a href="#" className="unchange-gray fs-16px underline weight-5">
            Forgot Password
          </a>
        </footer>
      </form>

      <p className="fs-16px unchange-gray weight-5">
        Not a user yet?{" "}
        <a href="#" className="unchange-gray underline">
          Register now!
        </a>
      </p>
    </div>
  );
}

export default LoginScreen;
