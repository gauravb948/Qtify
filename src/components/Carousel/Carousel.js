import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
import "./Carousel.module.css";
import "swiper/swiper-bundle.css"; // Swiper CSS
import { Navigation, Pagination } from "swiper/modules";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";

// Import SVGs as React components

export default function Carousel({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {/* Left Arrow Navigation Button */}
      <LeftNavigation ref={prevRef} />
      <div style={{ flex: "1", overflow: "hidden" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={7}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          onInit={(swiper) => {
            // Assign the navigation buttons to Swiper after initialization
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                key={item.id}
                img={item.image}
                heading={item.title}
                chipLabel={item.follows}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <RightNavigation ref={nextRef} />
    </div>
  );
}
