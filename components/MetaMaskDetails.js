import { IKImage } from "imagekitio-react";
import React, { useState } from "react";
import styles from "scss/components/MetaMaskDetails.module.scss";
import axios from "axios";
import { useEffect } from "react";

function MetaMaskDetails() {
  let [post, setPost] = useState(null);

  const fetching = async () => {
    try {
      let res = await axios.get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@BlockAuditReport`
      );

      let post = res.data.items.find((item) =>
        item.title === "Escrow Service" ? item : null
      );

      setPost(post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  let toText = (node) => {
    let tag = document?.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  return (
    <div className={styles.card}>
      <img src={post?.thumbnail} className={styles.banner} alt="" />
      {/* <IKImage
        path="images/metamask.png"
        className={styles.banner}
        loading="lazy"
        lqip={{ active: true }}
        alt=""
      /> */}
      <div className={styles.body}>
        <p className={`black weight-6 fs-12px mb-5px ${styles.title}`}>
          {post?.title}
        </p>
        <p className={`${styles.subtitle} fs-10px weight-6 gray`}>
          {toText(post?.content).substring(0, 100).concat("...")}{" "}
          <a
            href={post?.link}
            rel="noreferrer"
            target="_blank"
            className="blue"
          >
            Read More
          </a>
        </p>
      </div>

      <a
        href="https://capitalcryptoacademy.com/"
        className={`${styles.link} fs-10px blue weight-6`}
      >
        https://capitalcryptoacademy.com/
      </a>
    </div>
  );
}

export default MetaMaskDetails;
