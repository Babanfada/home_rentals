import Image from "next/image";
import React from "react";
import styles from "../styles/navbar.module.scss";
import logo from "../public/images/logo.png";
import { navList } from "./Data";
import { JsxElement } from "typescript";
import ActiveLink from "./ActiveLink";
import { RiMenuAddLine, RiCloseLine } from "react-icons/ri";
import { dataContext } from "./Layout";
import { motion, AnimatePresence } from "framer-motion";
// import Navigations from "./Navigations";
interface NavbarProps {
  (nav: string, index: number): JsxElement;
}
//  style={{ display: `${toggle ? "block" : "none"}` }}
const Navbar = ({}) => {
  const { toggle, setToggle, handleToggle, background } =
    React.useContext(dataContext);
  const Navigations = () => {
    return navList.map((nav, index) => {
      return (
        <ActiveLink href={nav.link} key={index} setToggle={setToggle}>
          <li onClick={() => setToggle(false)}>{nav.list}</li>
        </ActiveLink>
      );
    });
  };

  return (
    <div
      style={{ background: `${background ? "black" : "transparent"}` }}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <Image alt={"logo"} src={logo} className={styles.img} />
        <motion.ul
          className={`${toggle ? styles.ul : ""}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1, height: "100%" },
          }}
          exit={{ opacity: 1 }}
        >
          {Navigations()}
        </motion.ul>

        {toggle ? (
          <motion.div
            onClick={handleToggle}
            className={styles.menu}
            whileHover={{ scale: 0.9 }}
          >
            <RiCloseLine />
          </motion.div>
        ) : (
          <motion.div
            onClick={handleToggle}
            className={styles.menu}
            whileHover={{ scale: 0.9 }}
          >
            <RiMenuAddLine />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
