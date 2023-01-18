import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { perks } from "./Data";
import styles from "../styles/perks.module.scss";
// import { item } from "./Data";
interface PerksProps {
  perk: {
    icon: StaticImageData;
    label: string;
  };
}
const item = perks.slice(0, 1);
// console.log(item);
const Perk = ({ perk }: PerksProps) => {
  return (
    <div>
      <div className={styles.img}>
        <Image src={perk.icon} alt="draft" />
      </div>

      <p>{perk.label}</p>
    </div>
  );
};

const Perks = ({}) => {
  return (
    <div className={styles.container}>
      {perks.map((perk, index) => {
        return <Perk key={index} perk={perk} />;
      })}
    </div>
  );
};

export default Perks;
