import Image from "next/image";
import { BsCart, BsEyeFill, BsHeartFill, BsStarFill } from "react-icons/bs";

const Product = () => {
  return (
    <div className="group relative h-[450px] w-[400px] cursor-pointer overflow-hidden bg-pink-100">
      <Image
        src={"/product.webp"}
        width={400}
        height={400}
        alt="Product"
        className="absolute group-hover:opacity-0 duration-500"
      />
      <Image
        src={"/product.jpeg"}
        width={400}
        height={400}
        alt="Product"
        className="absolute opacity-0 group-hover:opacity-100 duration-500"
      />
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-1 text-yellow-500">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <h1 className="text-xl">Pencil eyeliner</h1>
        <p>$55.00</p>
      </div>
      <div className="absolute bottom-32 right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-pink-500 duration-1000 hover:bg-gray-900 hover:text-white">
        <BsCart className="text-2xl text-white" />
      </div>
      <div className="absolute right-5 top-5 flex translate-x-16 flex-col items-center gap-3 text-xl opacity-0 transition-all duration-1000 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-white drop-shadow duration-1000 hover:bg-pink-500 hover:text-white">
          <BsEyeFill />
        </div>
        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-white drop-shadow duration-1000 hover:bg-pink-500 hover:text-white">
          <BsHeartFill />
        </div>
      </div>
    </div>
  );
};

const SectionFour = () => {
  return (
    <section className="mb-20 mt-20 flex w-full flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <span className="text-2xl uppercase tracking-widest text-pink-500">
          the latest
        </span>
        <h1 className="mb-10 text-5xl font-bold">organix products</h1>
        <div className="h-1 w-24 bg-pink-500"></div>
      </div>
      <div className="flex items-center gap-10">
        <Product />
        <Product />
      </div>
      <button className="rounded-full bg-pink-500 px-6 py-2 uppercase text-white">
        view all
      </button>
    </section>
  );
};

export default SectionFour;
