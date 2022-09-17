import React from "react";
import styles from "scss/components/ContactCard.module.scss";

function ContactCard({ icon, title }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.icon}>{icon}</div>
      <p className="fs-30px weight-5 black">{title}</p>
    </div>
  );
}

export default ContactCard;
