import React from "react";
import { navList } from "./Data";
import ActiveLink from "./ActiveLink";
import { NextPage } from "next";
interface NavigationsProps {}

const Navigations = ({}):any => {
  return navList.map((nav, index) => {
    return (
      <ActiveLink href={nav.link} key={index}>
        <li>{nav.list}</li>
      </ActiveLink>
    );
  });
};

export default Navigations;
