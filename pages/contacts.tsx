import { NextPage } from "next";
import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

interface contactsProps {}

const contacts: NextPage<contactsProps> = ({}) => {
  return (
    <div>
      <Header id={3} />
      <Navbar />
      <p>this is the contact page</p>
    </div>
  );
};

export default contacts;
