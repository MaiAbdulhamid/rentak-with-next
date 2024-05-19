import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowIcon } from "@/app/[locale]/assets/svgs";
import Unit from "@/components/unit";

const UnitsSlider = ({ properties }: any) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        nextEl: ".custom--next",
        prevEl: ".custom--prev",
      }}
      // autoplay={true}
      pagination={{ clickable: true }}
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
      {properties.map((property: { id: any }) => (
        <SwiperSlide key={property.id}>
          <Unit item={property} />
        </SwiperSlide>
      ))}
      <div className="custom--prev">
        <ArrowIcon type="left" />
      </div>
      <div className="custom--next">
        <ArrowIcon type="right" />
      </div>
    </Swiper>
  );
};
export default UnitsSlider;
