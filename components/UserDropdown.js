import styles from "scss/components/UserDropdown.module.scss";
import { useDispatch } from "react-redux";
import { toggleState as toggleLoginScreenState } from "reduxState/slices/loginScreenSlice";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleState as toggleBlackScreenState } from "reduxState/slices/blackScreenSlice";
import { forwardRef } from "react";

const UserDropdown = forwardRef((props, ref) => {
  const [stateValue, stateSetter] = props.state;
  const dispatch = useDispatch();

  const login = () => {
    dispatch(toggleLoginScreenState(true));
    dispatch(toggleBlackScreenState(true));
    stateSetter(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={ref}
    >
      <button className={`${styles.btn} weight-6`} onClick={login}>
        Login
      </button>
      <button className={`${styles.btn} weight-6`} onClick={login}>
        Create Account
      </button>
    </div>
  );
});

UserDropdown.displayName = "UserDropdown";

export default UserDropdown;
