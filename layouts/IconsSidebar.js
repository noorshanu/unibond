import { IKImage } from "imagekitio-react";
import Link from "next/link";
import React, { useState } from "react";
import styles from "scss/layout/IconsSidebar.module.scss";

function IconsSidebar() {
  const [id, setId] = useState("1");

  const IDhandler = (givenID) => {
    setId(givenID);
  };

  return (
    <div className={styles.sidebar}>
      <Link href="/" passHref>
        <button
          className={`pointer ${id === "1" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="1"
          data-icon-name="Home"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/homeicon.svg"
          />
        </button>
      </Link>
      <Link href="/services" passHref>
        <button
          className={`pointer  ${id === "2" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="2"
          data-icon-name="Services"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/bagicon.svg"
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "3" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="3"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/currenticon.svg"
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "4" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="4"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/communityicon.svg"
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "5" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="5"
          data-icon-name="Blog"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/bitcoinicon.svg"
          />
        </button>
      </Link>
      <Link href="/location" passHref>
        <button
          className={`pointer  ${id === "6" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="6"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/locationicon.svg"
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer  ${id === "7" ? styles.active : ""}`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="7"
          data-icon-name="Payment"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/bitcoin-icon.svg"
          />
        </button>
      </Link>
      <Link href="#" passHref>
        <button
          className={`pointer ${styles.baggingIcon}  ${
            id === "8" ? styles.active : ""
          }`}
          onClick={(e) => IDhandler(e.currentTarget.id)}
          id="8"
        >
          <IKImage
            loading="lazy"
            lqip={{ active: true }}
            alt=""
            path="/icons/bagging-icon.svg"
          />
        </button>
      </Link>
    </div>
  );
}

export default IconsSidebar;
