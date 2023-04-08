import Image from "next/image";

const Images = () => {
  return (
    <section className="w-full pt-28">
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/1.webp?alt=media&token=4136f075-d484-4a1e-835f-bb8ebbb80690"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/2.webp?alt=media&token=1441cbbb-e65d-49c4-ac03-cd89c1901cd8"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/3.webp?alt=media&token=684833dd-d12a-42bc-8475-bb8f12f3cdac"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/4.webp?alt=media&token=88a47813-2192-4944-80e5-fb026c624e6b"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/5.webp?alt=media&token=e1379523-9421-44ba-bcba-7427acca9ede"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/blackbeard-b03b7.appspot.com/o/6.webp?alt=media&token=1a16a344-53f7-4a42-8c03-c487d80a2684"
        }
        width={1920}
        height={1280}
        alt="product image"
      />
    </section>
  );
};

export default Images;
