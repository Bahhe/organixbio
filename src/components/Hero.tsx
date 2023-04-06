import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Product = () => {
  return (
    <div className="flex h-screen items-end">
      <div className="showcase flex h-[calc(100vh-110px)] w-screen items-center">
        <div className="flex flex-1 items-center justify-center">
          <div className="">
            <span className="text-4xl text-violet-300">Cosmetics</span>
            <h1 className="pb-5 text-7xl drop-shadow font-[800]">
              Super Natural
            </h1>
            <p className="w-[600px] leading-6 tracking-widest text-violet-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dolore, dolor soluta eius praesentium alias. Accusamus
              alias natus vero quasi?
            </p>
            <button className="mt-5 rounded-full bg-violet-500 px-6 py-3 uppercase text-white shadow-xl">
              shop now
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src={"/product.webp"} alt="product" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="group relative mx-auto flex h-screen w-screen items-center">
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
      <MdArrowBackIos className="image-swiper-button-prev absolute left-5 z-10 cursor-pointer text-5xl opacity-0 duration-700 hover:scale-105 group-hover:opacity-100" />
      <MdArrowForwardIos className="image-swiper-button-next absolute right-5 z-10 cursor-pointer text-5xl opacity-0 duration-700 hover:scale-105 group-hover:opacity-100" />
    </div>
  );
};

export default Hero;
