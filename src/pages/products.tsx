import Image from "next/image";
import Header from "~/components/Header";

const Product = () => {
  return (
    <div className="flex gap-5">
      <div className="w-96 cursor-pointer border">
        <Image
          src={"/product.webp"}
          width={200}
          height={200}
          alt="product"
          className="w-full"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold capitalize">title</h1>
        <p className="py-3 text-lg">$45.33</p>
        <p className="w-5/6 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatem ab quibusdam qui, quaerat officia distinctio reiciendis
          quidem nulla doloremque.
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center pt-40">
        <div className="flex w-1/2 flex-col items-center">
          <div className="flex w-full items-center justify-between bg-gray-100 p-10">
            <p>items: 24</p>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full border px-5 py-2 shadow"
            />
          </div>
          <div className="flex flex-col gap-10 py-10">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
