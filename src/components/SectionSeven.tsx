import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const SectionSeven = () => {
  return (
    <section className="bg-pink-100 py-20">
      <div className="flex flex-col items-center gap-5">
        <p className="text-xl uppercase tracking-[.5rem] text-pink-400">
          the products
        </p>
        <h1 className="text-5xl font-bold capitalize">customer review</h1>
        <div className="h-1 w-20 bg-pink-500"></div>
      </div>
      <div className="mt-20 flex items-center justify-center gap-10">
        <div className="relative bg-white p-16">
          <Image
            src={"/product.webp"}
            width={120}
            height={120}
            alt="person"
            className="absolute left-10 top-0 -translate-y-1/2 rounded-full border border-4 border-pink-500 bg-white"
          />
          <p className="w-[500px] py-5 text-pink-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            ullam eligendi a! Tenetur, neque. A facilis non porro nemo sunt.
          </p>
          <div className="flex items-center gap-3 pb-3">
            <h1 className="text-3xl font-[600] capitalize">john doe</h1>
            <p className="font-[200]">web desginer</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
        <div className="relative bg-white p-16">
          <Image
            src={"/product.webp"}
            width={120}
            height={120}
            alt="person"
            className="absolute left-10 top-0 -translate-y-1/2 rounded-full border border-4 border-pink-500 bg-white"
          />
          <p className="w-[500px] py-5 text-pink-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            ullam eligendi a! Tenetur, neque. A facilis non porro nemo sunt.
          </p>
          <div className="flex items-center gap-3 pb-3">
            <h1 className="text-3xl font-[600] capitalize">john doe</h1>
            <p className="font-[200]">web desginer</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionSeven;
