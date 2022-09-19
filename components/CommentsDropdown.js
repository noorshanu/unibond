import React, { forwardRef } from "react";
import styles from "scss/components/CommentsDropdown.module.scss";
import IconButton from "./IconButton";

const UserCard = ({ img, title, notify, notficationCount }) => {
  return (
    <div className={styles.userCard}>
      <IconButton img={img} notify={notify} />
      <p className="fs-14px white weight-7">{title}</p>
      {notficationCount ? (
        <p className={`${styles.commentNumber} fs-16px white weight-5`}>
          ({notficationCount})
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

const CommentsDropdown = React.forwardRef((props, ref) => {
  const [stateValue, stateSetter] = props.state;

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={ref}
    >
      <UserCard
        img="icons/userIcon.png"
        title="James Green"
        notify={true}
        notficationCount={3}
      />
      <UserCard img="icons/userIcon.png" title="Carmen Lewis" notify={true} />
      <UserCard
        img="icons/userIcon.png"
        title="Michael Richard"
        notify={false}
      />
      <UserCard img="icons/userIcon.png" title="Nicole James" notify={false} />
    </div>
  );
});

CommentsDropdown.displayName = "CommentsDropdown";

export default CommentsDropdown;
