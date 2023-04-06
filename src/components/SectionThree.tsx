import { BsBoxSeam, BsGift } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { RxPerson } from "react-icons/rx";

const SectionThree = () => {
  return (
    <section className="mb-20 mt-20 flex w-full flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <span className="text-sm uppercase tracking-[.3rem] text-violet-400 font-[500]">
          the products
        </span>
        <h1 className="mb-10 text-5xl font-bold">Our Services</h1>
        <div className="h-1 w-24 bg-violet-500"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-40">
        <div className="flex flex-col items-center gap-5">
          <BsBoxSeam className="text-5xl text-violet-500" />
          <h1 className="text-2xl capitalize">free delevery</h1>
          <p className="w-52 text-center text-violet-500">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <GiMoneyStack className="text-5xl text-violet-500" />
          <h1 className="text-2xl capitalize">way to buy</h1>
          <p className="w-52 text-center text-violet-500">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <RxPerson className="text-5xl text-violet-500" />
          <h1 className="text-2xl capitalize">personal session</h1>
          <p className="w-52 text-center text-violet-500">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BsGift className="text-5xl text-violet-500" />
          <h1 className="text-2xl capitalize">gift voucher</h1>
          <p className="w-52 text-center text-violet-500">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
