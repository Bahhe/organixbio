import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Product = () => {
  return (
    <div className=" flex items-center">
      <div className="flex-1">
        <h1 className="py-5 text-5xl font-bold">Lorem ipsum dolor</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolore, dolor soluta eius praesentium alias. Accusamus alias natus
          vero quasi?
        </p>
        <button className="text-bold mt-5 rounded-full bg-green-500 px-4 py-2 text-lg font-thin text-white drop-shadow">
          shop now
        </button>
      </div>
      <div className="flex-1">
        <Image src={"/product.jpeg"} alt="product" width={400} height={400} />
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
      </Swiper>
      <MdArrowBackIos className="image-swiper-button-prev absolute left-0 z-10 -translate-x-1/2 cursor-pointer text-5xl opacity-0  duration-700 hover:scale-105 group-hover:opacity-100" />
      <MdArrowForwardIos className="image-swiper-button-next absolute right-0 z-10 translate-x-1/2 cursor-pointer text-5xl opacity-0 duration-700 hover:scale-105 group-hover:opacity-100" />
    </div>
  );
};

export default Hero;
