import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full py-20">
      <div className="flex items-center justify-center gap-10 py-10">
        <div>
          <Image src={"/product.webp"} width={400} height={400} alt="product" />
        </div>
        <div>
          <p className="font-[600] uppercase tracking-[.5rem] text-violet-400 ">
            the products
          </p>
          <h1 className="pb-3 text-4xl font-bold capitalize tracking-wide text-gray-800">
            All About Organix bio
          </h1>
          <div className="h-1 w-28 bg-violet-500"></div>
          <p className="w-[600px] pt-5  leading-7 tracking-widest text-violet-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis
            aliquid ullam dolorem nisi dolore voluptas porro optio natus error.
            Dolorem, impedit recusandae at deleniti provident necessitatibus
          </p>
          <div className="flex gap-5 py-5  tracking-wide text-violet-500">
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
            </ul>
          </div>
          <button className="mt-5 rounded-full bg-violet-500 px-5 py-2 text-white">
            view more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
