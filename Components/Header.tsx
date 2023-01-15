import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { headDetails, headProp } from "./Data";
// import { headDetails } from "./Data";
interface id {
 id:  number;
}

const Header: NextPage<id> = ({ id }) => {
  return (
    <Head>
      <title>{headDetails[id].name}</title>
      <meta name={headDetails[id].name} content={headDetails[id].content} />
    </Head>
  );
};

export default Header;
