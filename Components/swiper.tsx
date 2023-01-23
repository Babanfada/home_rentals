import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperData } from "./Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Avatar } from "@mui/material";
import styles from "../styles/swiper.module.scss";
import Image from "next/image";
export default function Testimony() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {swiperData.map((testimonial, index) => {
          return (
            <SwiperSlide className={styles.swiper} key={index}>
              <div className={styles.div}>
                <p>{testimonial.text}</p>
                <div className={styles.div2}>
                  <Avatar
                    sx={{ width: 61, height: 61 }}
                    // src={testimonial.img}
                    alt="draft"
                  >
                    <Image
                      style={{ width: 61, height: 61 }}
                      src={testimonial.img}
                      alt="draft"
                    />
                  </Avatar>
                  <span className={styles.div3}>
                    <span className={styles.span1}>{testimonial.name}</span>
                    <span className={styles.span2}>Property Owner</span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
