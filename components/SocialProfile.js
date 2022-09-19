import React from "react";
import styles from "scss/components/SocialProfile.module.scss";
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

const Card = ({ title, Icon }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_left} fs-18px`}>
        <div className={styles.icon_wrapper}>
          <Icon />
        </div>
        <p className="black fs-inherit weight-5">{title}</p>
      </div>
      <div>
        <button className="pointer yellow w-fit-content fs-18px weight-5">
          Connect
        </button>
      </div>
    </div>
  );
};

function SocialProfile() {
  return (
    <div className={styles.wrapper}>
      <Card title="Linkedin" Icon={() => <FaLinkedinIn className="black" />} />
      <Card title="Twitter" Icon={() => <FaTwitter className="black" />} />
      <Card title="Facebook" Icon={() => <FaFacebook className="black" />} />
    </div>
  );
}

export default SocialProfile;
