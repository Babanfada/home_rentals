// import Head from "next/head";
import React from "react";
import Image from "next/image";
import { JsxElement } from "typescript";
import Header from "../Components/Header";
import Map from "../Components/Map";
import Mapp from "../Components/Mapp";
import Navbar from "../Components/Navbar";
import Perks from "../Components/Perks";
import styles from "../styles/Home.module.scss";
import image1 from "../public/images/image1.png";
import {
  BootstrapButton,
  landlordData,
  BootstrapButton3,
} from "../Components/Data";
import ActionAreaCard, { Icons } from "../Components/Card";
// import { perks } from "../Components/Data";
import { GetServerSideProps, NextPage } from "next";
import { Box, Pagination, Skeleton } from "@mui/material";
import GridImage from "../Components/GridImage";
import Flexibility from "../Components/Flexibility";
// import home from "../public/images/home.png"
interface Props {
  posts: any[];
}
// interface pagination {
//   (e: any, p: number);
// }
const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  const [pageNumber, setpageNumber] = React.useState(0);
  const usersperpage = 6;
  const pagesVisited = pageNumber * usersperpage;
  const displayUsers = posts.slice(pagesVisited, pagesVisited + usersperpage);
  const pageCount = Math.floor(posts.length / usersperpage);

  const handleChange = (e: any, p: any) => {
    setpageNumber(p);
  };
  return (
    <>
      {/* Container  1 ....... */}
      <div className={styles.container}>
        <Header id={0} />
        <Navbar />
        <Mapp />
        {/* <Map zoomlevel ={17} /> */}
      </div>
      {/* Container  2 ....... */}
      <div className={styles.container2}>
        <p className={styles.p}>
          Minimum living cost to take care of eveything
        </p>
        <div>
          <Image src={image1} alt="draft" />
          <Perks />
        </div>
      </div>
      {/* Container  3 ....... */}
      <div className={styles.container3}>
        <div className={styles.divs}>
          <p className={styles.p}>List of Properties</p>
          <BootstrapButton variant="contained">
            View All Property
          </BootstrapButton>
        </div>
        {posts ? (
          <div className={styles.action}>
            {displayUsers.map((post, index) => {
              return <ActionAreaCard key={index} post={post} />;
            })}
          </div>
        ) : (
          <Box>
            <Skeleton
              width={210}
              height={118}
              variant="rectangular"
              animation="wave"
            />
            <Skeleton
              width={"50%"}
              height={20}
              variant="rectangular"
              animation="wave"
            />
            <Skeleton
              width={"50%"}
              height={20}
              variant="rectangular"
              animation="wave"
            />
          </Box>
        )}
        <Pagination
          count={pageCount}
          size="small"
          onChange={handleChange}
          shape="rounded"
          className={styles.pagination}
        />
      </div>
      {/* Container  4 ....... */}
      <div className={styles.container4}>
        <div className={styles.inner}>
          <GridImage />
          <Flexibility />
        </div>
        <p className={styles.p}>
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </p>
        <div className={styles.inner2}>
          <h1>Add A New Property Address</h1>
          <form action="" method="post">
            <div className={styles.property}>
              {landlordData.map((landlord, index) => {
                return (
                  <div
                    style={{
                      display: "grid",
                      gridColumn: landlord.grid,
                    }}
                    className={styles.div}
                    key={index}
                  >
                    <span className={styles.span}>
                      {landlord.label}{" "}
                      <span style={{ color: "#F4511E" }}>*</span>
                    </span>
                    <span>{landlord.textField}</span>
                  </div>
                );
              })}
            </div>
            <BootstrapButton3 >Add New Property</BootstrapButton3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "08c090823fmshd856d0a8142c773p1ca3c6jsnf6227a231cbf",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  const url1 =
    "https://booking-com.p.rapidapi.com/v1/hotels/data?locale=en-gb&hotel_id=1377073";
  const url =
    " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ";
  const res = await fetch(url);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
};
