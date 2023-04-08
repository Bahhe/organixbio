import Image from "next/image";

const Images = () => {
  return (
    <section className="w-full pt-28">
      <Image
        src={"/one.webp"}
        placeholder="blur"
        blurDataURL="/one.webp"
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/two.webp"}
        placeholder="blur"
        blurDataURL="/one.webp"
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        placeholder="blur"
        blurDataURL="/one.webp"
        src={"/three.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        placeholder="blur"
        blurDataURL="/one.webp"
        src={"/four.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        placeholder="blur"
        blurDataURL="/one.webp"
        src={"/five.webp"}
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={"/six.webp"}
        placeholder="blur"
        blurDataURL="/one.webp"
        width={1920}
        height={1280}
        alt="product image"
      />
    </section>
  );
};

export default Images;
