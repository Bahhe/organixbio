import Image from "next/image";

const Congrats = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center text-2xl">
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/tank%20you%20page.jpg?alt=media&token=1536907d-2993-4927-b16b-69756e69babf"
        }
        width={883}
        height={1250}
        alt="congratulations"
      />
    </div>
  );
};
export default Congrats;
