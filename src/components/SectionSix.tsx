import Image from "next/image";
import Countdown from "react-countdown";
import { BsHeart, BsPencilFill, BsStarFill } from "react-icons/bs";
import { BiRuler } from "react-icons/bi";
import { useState } from "react";

const SectionSix = () => {
  const [url, setUrl] = useState("/product.webp");

  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center gap-5">
        <p className="text-2xl uppercase tracking-[.5rem] text-violet-400">
          featured
        </p>
        <h1 className="text-5xl font-bold capitalize">trending now</h1>
        <div className="h-1 w-20 bg-violet-500"></div>
      </div>
      <div className="flex flex-col gap-10 py-10 xl:w-2/3">
        <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row">
          <div className="lg:w-1/2">
            <Image
              src={url}
              alt="product"
              width={700}
              height={700}
              className="border"
            />
            <div className="flex items-center justify-between gap-1 overflow-x-auto pt-2">
              <Image
                onMouseEnter={() => setUrl("/product.jpeg")}
                onMouseLeave={() => setUrl("/product.webp")}
                src={"/one.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
              <Image
                src={"/two.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
              <Image
                src={"/three.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
              <Image
                src={"/four.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
              <Image
                src={"/five.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
              <Image
                src={"/six.jpeg"}
                alt="product"
                width={150}
                height={150}
                className="border"
              />
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-4 lg:w-1/2">
            <h1 className="text-2xl capitalize">base foundation</h1>
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-sm text-yellow-400">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <div className="flex items-center gap-1">
                <p>write review</p> <BsPencilFill className="text-sm" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-violet-400 line-through">$50.00</p>
              <p className="text-2xl">$55.00</p>
            </div>
            <div className="text-sm text-violet-400">
              <div className="flex items-center gap-3">
                <p className="font-bold">vendor:</p> <p>fabulous-ishi</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-bold">product type:</p> <p>fabulous-ishi</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-bold">sku:</p> <p>fabulous-ishi</p>
              </div>
            </div>
            <div className="flex items-center gap-10 text-violet-600">
              <div className="flex items-center gap-3 capitalize">
                <BsHeart />
                <p>add to wishlist</p>
              </div>
              <div className="flex items-center gap-3 capitalize">
                <BiRuler />
                <p>sizechart</p>
              </div>
            </div>
            <div>
              <Countdown
                date={Date.now() + 100000000}
                className="text-4xl font-bold text-violet-800"
              />
            </div>
            <div>
              <p className="font-bold tracking-wide">
                hurry! only 8 units left in stock
              </p>
              <div className="h-3 w-72 rounded-full bg-violet-100">
                <div className="h-3 w-32 rounded-full bg-violet-800"></div>
              </div>
              <div className="pt-5">
                <p className="text-lg font-bold text-violet-400">size</p>
                <div className="flex items-center gap-3 uppercase">
                  <div className="flex h-10 w-10 items-center justify-center border bg-black text-white">
                    s
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center border">
                    m
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center border">
                    l
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <p className="text-lg font-bold text-violet-400">color</p>
                <div className="flex items-center gap-3 uppercase">
                  <div className="flex h-10 w-10 border bg-black"></div>
                  <div className="flex h-10 w-10 border bg-yellow-500"></div>
                  <div className="flex h-10 w-10 border bg-red-500"></div>
                </div>
              </div>
              <div className="pt-5">
                <p className="pb-2 text-lg font-bold text-violet-400">
                  quantity
                </p>
                <div className="flex items-center uppercase">
                  <div className="flex h-10 w-10 items-center justify-center border">
                    -
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center border">
                    1
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center border">
                    +
                  </div>
                </div>
                <div className="flex gap-5 py-5">
                  <button className="lg:text-md rounded-full bg-violet-500 px-10 py-2 text-sm uppercase text-white">
                    add to cart
                  </button>
                  <button className="lg:text-md rounded-full bg-black px-10 py-2 text-sm uppercase text-white">
                    buy it now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full border p-10 pt-20">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer bg-violet-100 px-5 py-2 uppercase duration-500 hover:bg-black hover:text-white">
            description
          </div>
          <p className="pb-10 text-violet-600">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and you
            are ready for summer!
          </p>
          <h1 className="pb-2 font-bold capitalize">Sample Unordered List</h1>
          <ul className="list-disc pl-8 text-violet-800">
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <h1 className="pb-2 pt-2 font-bold capitalize">
            Sample ordered List
          </h1>
          <ol className="list-decimal pl-8 text-violet-800">
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum.</li>
          </ol>
          <h1 className="pb-2 pt-2 font-bold capitalize">
            Sample Paragraph Text
          </h1>
          <p className="border-l pl-10 text-violet-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatum fuga optio, officia repudiandae excepturi explicabo! Vel
            cum obcaecati ad nulla eum asperiores tempora in odio quos sapiente
            consequuntur suscipit voluptatum dolorem, reprehenderit soluta
            voluptatem illum minus quod voluptates rem fugiat quasi facilis?
            Nemo ea, quos recusandae ut eos facere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
