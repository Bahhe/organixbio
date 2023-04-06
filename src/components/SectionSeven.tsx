import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const SectionSeven = () => {
  return (
    <section className="bg-violet-100 py-20">
      <div className="flex flex-col items-center gap-5">
        <p className="text-xl uppercase lg:tracking-[.5rem] text-violet-400">
          the products
        </p>
        <h1 className="text-5xl font-bold capitalize text-center lg:text-start">customer review</h1>
        <div className="h-1 w-20 bg-violet-500"></div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-20 lg:flex-row lg:gap-10">
        <div className="relative bg-white p-16">
          <Image
            src={"/product.webp"}
            width={120}
            height={120}
            alt="person"
            className="absolute left-10 top-0 -translate-y-1/2 rounded-full border-4 border-violet-500 bg-white"
          />
          <p className="max-w-[500px] py-5 text-violet-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            ullam eligendi a! Tenetur, neque. A facilis non porro nemo sunt.
          </p>
          <div className="flex lg:items-center flex-col lg:flex-row gap-3 pb-3">
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
            className="absolute left-10 top-0 -translate-y-1/2 rounded-full border-4 border-violet-500 bg-white"
          />
          <p className="max-w-[500px] py-5 text-violet-600">
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
