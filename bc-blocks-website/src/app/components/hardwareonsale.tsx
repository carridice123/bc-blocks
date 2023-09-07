"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

function slide() {
  return (
    <SwiperSlide>
      <Image src="/door.png" alt="door image" width={200} height={200} />
    </SwiperSlide>
  );
}
const HardwareOnSale = () => {
  return (
    <section>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {slide()}
          {slide()}
          {slide()}
          {slide()}
          {slide()}
          {slide()}
          {slide()}
        </Swiper>
      </div>
    </section>
  );
};

export default HardwareOnSale;
