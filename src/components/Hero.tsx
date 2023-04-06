import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Product = () => {
  return (
    <div className="flex h-screen items-end">
      <div className="showcase flex flex-col-reverse lg:flex-row h-[calc(100vh-120px)] w-screen items-center">
        <div className="flex flex-1 items-center justify-center z-10 backdrop-blur-sm">
          <div className="flex flex-col items-center lg:items-start">
            <span className="lg:text-4xl text-violet-300">Cosmetics</span>
            <h1 className="lg:pb-5 lg:text-7xl text-4xl drop-shadow font-[800]">
              Super Natural
            </h1>
            <p className="max-w-[600px] lg:leading-6 lg:tracking-widest text-violet-500 lg:py-5 py-2 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dolore, dolor soluta eius praesentium alias. Accusamus
              alias natus vero quasi?
            </p>
            <button className="mt-5 w-fit rounded-full bg-violet-500 px-6 py-3 uppercase text-white shadow-xl mb-2">
              shop now
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src={"/product.webp"} alt="product" width={500} height={500} className="absolute top-1/2 -translate-y-1/2" />
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
