import Image from "next/image";

const Images = () => {
  return (
    <section className="w-full pt-28">
      <Image
        src={"/product/one.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/product/two.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/product/three.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/product/four.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/product/five.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/product/six.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
    </section>
  );
};

export default Images;
