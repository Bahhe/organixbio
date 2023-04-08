import Image from "next/image";

const url = ["1", "2", "3", "4", "5", "6"];

const Images = () => {
  return (
    <section className="w-full pt-28">
      {url.map((u, i) => (
        <Image
          src={`/${u}.webp`}
          width={1920}
          height={1280}
          alt="product image"
          key={i}
        />
      ))}
    </section>
  );
};

export default Images;
