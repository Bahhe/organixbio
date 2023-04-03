import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center gap-10 py-10">
        <div>
          <Image src={"/product.jpeg"} width={400} height={400} alt="product" />
        </div>
        <div>
          <p className="text-2xl uppercase tracking-widest text-pink-500">
            the products
          </p>
          <h1 className="py-5 text-5xl font-bold capitalize tracking-wide">
            ALL About Organix
          </h1>
          <div className="h-1 w-20 bg-pink-400"></div>
          <p className="w-96 pt-5 text-pink-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis
            aliquid ullam dolorem nisi dolore voluptas porro optio natus error.
            Dolorem, impedit recusandae at deleniti provident necessitatibus
          </p>
          <div className="flex gap-5 py-5 text-pink-500">
            <ul className="ml-10 list-disc">
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>
            <ul className="ml-10 list-disc">
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
              <li>Corrupti, aliquam!</li>
            </ul>
          </div>
          <button className="rounded-full bg-pink-400 px-4 py-2 text-white">
            view more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
