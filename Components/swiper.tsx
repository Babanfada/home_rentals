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
import styles from "../styles/swiper.module.scss"
import Image from "next/image";
export default function Testimony() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {swiperData.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.div}>
                <p>{testimonial.text}</p>
                <div>
                  <Avatar >
                    <Image src={testimonial.img} alt="draft" />
                  </Avatar>
                  <div>
                    <span>{testimonial.name}</span>
                    <span>Property Owner</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
