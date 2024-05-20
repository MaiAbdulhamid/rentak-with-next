"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowIcon } from "@/app/[locale]/assets/svgs";
import Unit from "@/components/unit";
import { type Unit as TUnit } from "@/services/units";

type UnitsSliderProps = {
  units: Array<TUnit>;
};

const UnitsSlider = ({ units }: UnitsSliderProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom--next",
          prevEl: ".custom--prev",
        }}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        breakpoints={{
          280: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {units.map((property: any) => (
          <SwiperSlide key={property.id}>
            <Unit item={property} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex w-full items-center justify-center gap-6">
        <div className="custom--prev">
          <ArrowIcon type="left" />
        </div>
        <div className="swiper-custom-pagination" />
        <div className="custom--next">
          <ArrowIcon type="right" />
        </div>
      </div>
    </>
  );
};
export default UnitsSlider;
