// import Head from "next/head";
import Image from "next/image";
import { JsxElement } from "typescript";
import Header from "../Components/Header";
import Map from "../Components/Map";
import Mapp from "../Components/Mapp";
import Navbar from "../Components/Navbar";
import Perks from "../Components/Perks";
import styles from "../styles/Home.module.scss";
import image1 from "../public/images/image1.png";
// import home from "../public/images/home.png"

export default function Home(): any {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
  return (
    <>
      <div className={styles.container}>
        <Header id={0} />
        <Navbar />
        <Mapp />
        {/* <Map zoomlevel ={17} /> */}
      </div>
      <div className={styles.container2}>
        <p className={styles.p}>Minimum living cost to take care of eveything</p>
        <div>
          <Image  src={image1} alt="draft" />
          <Perks />
        </div>
      </div>
    </>
  );
}
