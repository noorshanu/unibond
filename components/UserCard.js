import React from "react";
import styles from "scss/components/UserCard.module.scss";
import IconButton from "./IconButton";

function UserCard({ img, notify, name, skill }) {
  return (
    <div className={styles.card}>
      <IconButton img={img} notify={notify} />
      <div>
        <h2 className="fs-20px weight-7 black mb-5px lh-1">{name}</h2>
        <p className="fs-14px black weight-4 lh-1">{skill}</p>
      </div>
    </div>
  );
}

export default UserCard;
