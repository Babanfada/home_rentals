// import Head from "next/head";
import Image from "next/image";
import { JsxElement } from "typescript";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";
// import home from "../public/images/home.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header id={0} />
     <Navbar />
      
    </div>
  );
}
