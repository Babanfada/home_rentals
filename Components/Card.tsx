import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import home2 from "../public/images/home2.png";
import styles from "../styles/card.module.scss";
import { cardIconData } from "./Data";
// import { headDetails } from "./Data";

const Component = ({ card }: any) => {
  return (
    <div className={styles.wrapper2}>
      <span>{card.icon}</span>
      <span>{card.number}</span>
    </div>
  );
};

export const Icons = (): any => {
  return (
    <div className={styles.wrapper}>
      {cardIconData.map((card, index) => {
        return <Component key={index} card={card} />;
      })}
    </div>
  );
};

export default function ActionAreaCard({ post }: any) {
  return (
    <div className={styles.card}>
      <CardActionArea>
        <Image
          src={home2}
          alt="draft"
          // className={styles.img}
          
        />
        <CardContent>
          <Typography
            className={styles.typo}
            gutterBottom
            variant="h5"
            component="div"
          >
            {post.userName}
            2578 Folsom street, san francisco, CA, 94110
          </Typography>
          <Typography
            className={styles.typo2}
            variant="body2"
            color="text.secondary"
          >
            Private Room
          </Typography>

          <p className={styles.p}>$1200/month</p>
        </CardContent>
      </CardActionArea>
      <Icons />
    </div>
  );
}
