import Image from "next/image";
import Countdown from "react-countdown";

const SectionFive = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-20 bg-violet-100 py-10">
      <div className="flex flex-col gap-6 items-center lg:items-start">
        <h1 className="lg:text-5xl text-3xl font-extrabold">Best Deal Of the Day</h1>
        <p className="max-w-[600px] w-5/6 lg:w-auto text-violet-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quasi sequi repudiandae voluptatum magnam eligendi iure tenetur
          veritatis iste fugit mollitia.
        </p>
        <p className="text-4xl font-bold text-violet-400">
          <Countdown date={Date.now() + 100000000} />
        </p>
        <button className="w-fit rounded-full bg-violet-500 px-5 py-2 text-white">
          view more
        </button>
      </div>
      <div>
        <Image src={"/product.webp"} width={300} height={300} alt="product" />
      </div>
    </section>
  );
};

export default SectionFive;
