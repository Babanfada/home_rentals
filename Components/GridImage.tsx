import { hrtime } from "process";
import React from "react";
import { homes } from "./Data";
import Image from "next/image";
import styles from "../styles/gridimage.module.scss";
interface GridImageProps {}

const GridImage = ({}) => {
  return (
    <div className={styles.container}>
      {homes.map((home, index) => {
        return (
          <div
            style={{ width: home.width, height: home.height }}
            className={styles.wrapper}
            key={index}
          >
            <Image
              style={{ borderRadius: "20px", objectFit: "cover" }}
              height={home.height}
              width={home.width}
              className={styles.img}
              src={home.img}
              alt="draft"
            />
            <span>{home.lable}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GridImage;
