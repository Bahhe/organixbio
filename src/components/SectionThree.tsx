import { BsBoxSeam } from "react-icons/bs";

const SectionThree = () => {
  return (
    <section className="mt-20 flex w-full flex-col items-center gap-10 mb-20">
      <div className="flex flex-col items-center">
        <span className="text-2xl uppercase tracking-widest text-pink-500">
          the products
        </span>
        <h1 className="text-5xl font-bold mb-10">Our Services</h1>
        <div className="w-24 h-1 bg-pink-500"></div>
      </div>
      <div className="flex items-center justify-center gap-40">
        <div className="flex flex-col items-center gap-5">
          <BsBoxSeam className="text-pink-500 text-5xl" />
          <h1 className="text-2xl capitalize">free delevery</h1>
          <p className="text-pink-500 w-52">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BsBoxSeam className="text-pink-500 text-5xl" />
          <h1 className="text-2xl capitalize">free delevery</h1>
          <p className="text-pink-500 w-52">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BsBoxSeam className="text-pink-500 text-5xl" />
          <h1 className="text-2xl capitalize">free delevery</h1>
          <p className="text-pink-500 w-52">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BsBoxSeam className="text-pink-500 text-5xl" />
          <h1 className="text-2xl capitalize">free delevery</h1>
          <p className="text-pink-500 w-52">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
