import React from "react";
import { BootstrapButton2 } from "./Data";
import styles from "../styles/flexibility.module.scss"
interface FlexibilityProps {}

const Flexibility = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h1>Flexibility and options to suit your lifestyle.</h1>
      <p>
        You need it? We got it. We make finding your next home easy,
        comfortable, and simple. From our happiness guarantee to our selective
        roommate finder option. We provide you the flexibility that you most
        desire.
      </p>
      <BootstrapButton2>Search Rooms</BootstrapButton2>
    </div>
  );
};

export default Flexibility;
