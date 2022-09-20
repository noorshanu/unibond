import styles from "scss/components/UserDropdown.module.scss";
import { useDispatch } from "react-redux";
import { toggleState as toggleLoginScreenState } from "reduxState/slices/loginScreenSlice";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleState as toggleBlackScreenState } from "reduxState/slices/blackScreenSlice";
import { forwardRef } from "react";
import Link from "next/link";

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
      <Link href="/profile">
        <a className={`${styles.btn} fs-14px weight-6`}>Profile</a>
      </Link>
      <Link href="/orders">
        <a className={`${styles.btn} fs-14px weight-6`}>Orders</a>
      </Link>
      <button className={`${styles.btn} fs-14px weight-6`} onClick={login}>
        Login
      </button>
      <button className={`${styles.btn} fs-14px weight-6`} onClick={login}>
        Create Account
      </button>
    </div>
  );
});

UserDropdown.displayName = "UserDropdown";

export default UserDropdown;
