import { IKImage } from "imagekitio-react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import styles from "scss/layout/SidebarFooter.module.scss";

function SidebarFooter({ className }) {
  return (
    <footer className={className}>
      <div className="mb-35px">
        <p className="fs-14px weight-6 mb-15px light-gray">Connect with us</p>

        <div className={styles.icons}>
          <Link href="/" target="_blank" passHref>
            <a>
              <FaFacebook />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <FaTwitter />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <IoLogoDiscord />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <MdEmail />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <FaInstagram />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <FaLinkedin />
            </a>
          </Link>
          <Link href="/" target="_blank" passHref>
            <a>
              <FaGithub />
            </a>
          </Link>
        </div>
      </div>

      <p className="fs-14px lh-1_6 weight-6">
        <span className="light-gray">
          All Rights Reserved uni.bond 2022 Made With
        </span>{" "}
        ❤️ <span className="light-gray">In</span>
        <IKImage
          path="images/flag.png"
          style={{ position: "relative", top: ".1rem", left: ".3rem" }}
          alt="as"
          loading="lazy"
          lqip={{ active: true }}
        />
      </p>
    </footer>
  );
}

export default SidebarFooter;
