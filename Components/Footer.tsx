import Image from "next/image";
import React from "react";
import styles from "../styles/footer.module.scss";
import { footerData, footerData2 } from "./Data";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterest,
  FaWifi,
} from "react-icons/fa";

// interface FooterProps {}

const Footer = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.first}>Logo</div>
        {/* kdsjsodkspo */}
        <div className={styles.second}>
          <div className={styles.div1}>
            <Image src={footerData[0].icon} alt="draft" />
            <span>{footerData[0].label}</span>
          </div>

          <div className={styles.div2}>
            <div className={styles.div1}>
              <Image src={footerData[1].icon} alt="draft" />
              <span>{footerData[1].label}</span>
            </div>
            <div style={{ marginLeft: "9vw" }} className={styles.div1}>
              <Image src={footerData[2].icon} alt="draft" />
              <span>{footerData[2].label}</span>
            </div>
          </div>
          <div className={styles.div3}>
            <p>Socials</p>
            <div>
              <FaFacebookSquare className={styles.icon} />
              <FaTwitter className={styles.icon} />{" "}
              <FaLinkedinIn className={styles.icon} />{" "}
              <FaYoutube className={styles.icon} />
              <FaInstagram className={styles.icon} />
              <FaGooglePlusG className={styles.icon} />{" "}
              <FaPinterest className={styles.icon} />{" "}
              <FaWifi className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <ul>
          {footerData2.map((footer, index) => {
            return <li key={index}>{footer}</li>;
          })}
        </ul>
        <p >
          Copyright © 2020 Minimumlivingcost. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
