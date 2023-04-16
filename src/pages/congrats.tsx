import Image from "next/image";

const Congrats = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center text-2xl">
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/thank%20you%20page%20(2)%20(1).jpg?alt=media&token=f1b19eed-d022-4941-8f8b-7fce00c77b96"
        }
        width={883}
        height={1250}
        alt="congratulations"
      />
    </div>
  );
};
export default Congrats;
