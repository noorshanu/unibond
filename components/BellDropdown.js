import React from "react";
import styles from "scss/components/BellDropdown.module.scss";

const NotificationCard = ({ title, notify }) => {
  return (
    <div
      className={`${styles.notificationCard} ${notify ? styles.notify : ""}`}
    >
      <p className="fs-16px white">{title}</p>
    </div>
  );
};

const BellDropdown = React.forwardRef((props, ref) => {
  const [stateValue, stateSetter] = props.state;

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={ref}
    >
      <NotificationCard title="Lorem ipsum dolor" notify={true} />
      <NotificationCard title="Notification 2 (unread)" notify={true} />
      <NotificationCard title="Notification 3 (unread)" notify={true} />
      <NotificationCard title="Notification 4 (unread)" notify={true} />
      <NotificationCard title="Notification 5 (unread)" />
      <NotificationCard title="Notification 6 (unread)" />
      <NotificationCard title="Notification 7 (unread)" />
    </div>
  );
});

BellDropdown.displayName = "BellDropdown";

export default BellDropdown;
