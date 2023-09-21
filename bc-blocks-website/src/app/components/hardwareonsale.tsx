"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "../styles/hardwareonsale.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

function slide() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/wheelbarrow.png"
        alt="wheelbarrow image"
        width={200}
        height={200}
      />
      <p>wheel barrow</p>
      <span>25,000JMD</span>
    </SwiperSlide>
  );
}
function slide2() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/shovel.png"
        alt="shovel image"
        width={200}
        height={200}
      />
      <p>shovel</p>
      <span>9,000JMD</span>
    </SwiperSlide>
  );
}
function slide3() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/lumber.png"
        alt="lumber image"
        width={200}
        height={200}
      />
      <p>lumber</p>
      <span>6,500JMD</span>
    </SwiperSlide>
  );
}
function slide4() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/windows3.png"
        alt="window image"
        width={200}
        height={200}
      />
      <p>windows</p>
      <span>17,000JMD</span>
    </SwiperSlide>
  );
}
function slide5() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/tiles.png"
        alt="tiles image"
        width={200}
        height={200}
      />
      <p>tiles</p>
      <span>12,000JMD</span>
    </SwiperSlide>
  );
}
function slide6() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/shovel.png"
        alt="shovel image"
        width={200}
        height={200}
      />
      <p>shovel</p>
      <span>9,500JMD</span>
    </SwiperSlide>
  );
}
function slide7() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/windows2.png"
        alt="windows image"
        width={200}
        height={200}
      />
      <p>windows</p>
      <span>17,000JMD</span>
    </SwiperSlide>
  );
}
function slide8() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/door.png"
        alt="door image"
        width={200}
        height={200}
      />
      <p>panel metal door 32x80</p>
      <span>30,000JMD$</span>
    </SwiperSlide>
  );
}
function slide9() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/pvcpipe2.jpg"
        alt="pvc pipe image"
        width={400}
        height={200}
      />
      <p>pvc pipe</p>
      <span>5,000JMD$</span>
    </SwiperSlide>
  );
}
const HardwareOnSale = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 3700,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          pagination={{ clickable: true }}
          className={styles.slides}
        >
          {slide()}
          {slide2()}
          {slide3()}
          {slide4()}
          {slide5()}
          {slide6()}
          {slide7()}
          {slide8()}
          {slide9()}
        </Swiper>
      </div>
    </section>
  );
};

export default HardwareOnSale;
