import Image from "next/image";
import Countdown from "react-countdown";
import { BsHeart, BsPencilFill, BsStarFill } from "react-icons/bs";
import { BiRuler } from "react-icons/bi";

const SectionSix = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center gap-5">
        <p className="text-2xl uppercase tracking-[.5rem] text-pink-400">
          featured
        </p>
        <h1 className="text-5xl font-bold capitalize">trending now</h1>
        <div className="h-1 w-20 bg-pink-500"></div>
      </div>
      <div className="flex gap-10 py-10">
        <div className="flex-1 border">
          <Image src={"/product.webp"} alt="product" width={400} height={400} />
        </div>
        <div className="flex-1">
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
            <p className="text-pink-400 line-through">$50.00</p>
            <p className="text-2xl">$55.00</p>
          </div>
          <div className="text-sm text-pink-400">
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
          <div className="flex items-center gap-3 text-pink-600">
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
              className="text-4xl font-bold text-pink-800"
            />
          </div>
          <div>
            <p className="font-bold tracking-wide">
              hurry! only 8 units left in stock
            </p>
            <div className="h-3 w-72 rounded-full bg-pink-100">
              <div className="h-3 w-32 rounded-full bg-pink-800"></div>
            </div>
            <div>
              <p className="text-lg font-bold text-pink-400">size</p>
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
            <div>
              <p>color</p>
              <div>s</div>
              <div>m</div>
              <div>l</div>
            </div>
            <div>
              <p>quantity</p>
              <div>
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
              <div>
                <button>add to cart</button>
                <button>buy it now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
