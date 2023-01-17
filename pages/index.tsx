// import Head from "next/head";
import Image from "next/image";
import { JsxElement } from "typescript";
import Header from "../Components/Header";
import Map from "../Components/Map";
import Mapp from "../Components/Mapp";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";
// import home from "../public/images/home.png"

export default function Home():any {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
  return (
    <div className={styles.container}>
      <Header id={0} />
      <Navbar />
      <Mapp />
      {/* <Map zoomlevel ={17} /> */}

    </div>
  );
}
