import Image from "next/image";
import React from "react";
import styles from "../styles/navbar.module.scss";
import logo from "../public/images/logo.png";
import { navList } from "./Data";
import { JsxElement } from "typescript";
import ActiveLink from "./ActiveLink";
import { RiMenuAddLine, RiCloseLine } from "react-icons/ri";
import { dataContext } from "./Layout";
interface NavbarProps {
  (nav: string, index: number): JsxElement;
}

const Navbar = ({}) => {
  const { toggle, setToggle, handleToggle } = React.useContext(dataContext);
  const Navigations = () => {
    return navList.map((nav, index) => {
      return (
        <ActiveLink href={nav.link} key={index}>
          <li>{nav.list}</li>
        </ActiveLink>
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <Image alt={"logo"} src={logo} className={styles.img} />
      <ul>{Navigations()}</ul>
      {toggle ? (
        <div onClick={handleToggle} className={styles.menu}>
          <RiCloseLine />
        </div>
      ) : (
        <div onClick={handleToggle} className={styles.menu}>
          <RiMenuAddLine />
        </div>
      )}
    </div>
  );
};

export default Navbar;
