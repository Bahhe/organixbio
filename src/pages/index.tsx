import moment from "moment";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useState,
  type FormEvent,
  useRef,
  type MutableRefObject,
  useEffect,
} from "react";
import { cities } from "~/utils/states";
import { BiLoaderAlt } from "react-icons/bi";

const Button = ({ sectionRef }: { sectionRef: MutableRefObject<null> }) => {
  const [inView, setInView] = useState(false);

  const scrollToSection = () => {
    if (sectionRef.current) {
      // eslint-disable-next-line
      (sectionRef.current as HTMLFormElement).scrollIntoView({
        behavior: "smooth",
      });
      setInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //eslint-disable-next-line
        if (entry !== undefined) {
          setInView(entry.isIntersecting);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        //eslint-disable-next-line
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <button
      onClick={scrollToSection}
      className={`fixed bottom-2 left-1/2 w-5/6 -translate-x-1/2 rounded-lg border bg-green-500 p-4 capitalize text-white shadow-sm duration-75 hover:scale-105 ${
        inView ? "hidden" : "block"
      }`}
    >
      أشتري الأن
    </button>
  );
};

const Form = ({ sectionRef }: { sectionRef: MutableRefObject<null> }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set the loading state to true

    const time = moment().format("MMMM Do YYYY, h:mm:ss a");

    const form = {
      name,
      city,
      phone,
      quantity,
      date: time,
    };

    if (phone === "") {
      setIsLoading(false); // Set the loading state to true

      return alert("يرجا أدخال رقم الهاتف");
    }

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    // eslint-disable-next-line
    await rawResponse.json();

    // print to screen
    // alert(content.data.tableRange);
    await router.push("/congrats");

    // Reset the form fields
    setIsLoading(false); // Set the loading state to true
    setPhone("");
    setName("");
    setCity("");
    setQuantity(1);
  };

  return (
    <form
      ref={sectionRef}
      className="my-10 flex flex-col gap-10 rounded-lg border p-10 shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-end">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          dir="RTL"
          className="sm:text-md block w-64 rounded-md border border-gray-300 px-4 py-2 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="الأسم الكامل"
        />
      </div>
      <div className="">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
          dir="RTL"
          placeholder="الولاية"
          className="sm:text-md block w-64 rounded-md border border-gray-300 bg-transparent px-4 py-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        >
          {cities.map((c, i) => (
            <option hidden={i === 0 ? true : false} key={i} value={c}>
              {i === 0 ? "" : i} {c}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
          dir="RTL"
          className="sm:text-md block w-64 rounded-md border border-gray-300 px-4 py-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="رقم الهاتف"
        />
      </div>
      <div className="">
        <p className="w-full pb-2 text-end">:الكمية</p>
        <div className="sm:text-md block flex items-center rounded-md border border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500">
          <div
            className="w-1/3 cursor-pointer text-center text-2xl"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </div>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
            type="number"
            name="quanity"
            id="quantity"
            dir="RTL"
            className="h-full w-1/3 border-l border-r py-2 text-center"
          />
          <div
            className="w-1/3 cursor-pointer text-center text-2xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex h-16 w-64 animate-bounce items-center justify-center rounded-md bg-green-600 text-sm text-xl text-white shadow"
        >
          {isLoading ? (
            <BiLoaderAlt className="absolute animate-spin text-4xl" />
          ) : (
            "اشتري الأن"
          )}
        </button>
      </div>
    </form>
  );
};

const Home: NextPage = () => {
  const sectionRef: MutableRefObject<null> = useRef(null);
  return (
    <>
      <Head>
        <title>Organixbio | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="mx-auto flex w-full flex-col items-center justify-center gap-5 lg:w-2/3">
          <div className="flex flex-col">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/01.jpg?alt=media&token=43a73d2a-27ed-4879-bc73-71cfe1f417da"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/02.jpg?alt=media&token=89b3fcf9-afba-45d2-9fad-0c16c8335708"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/03.jpg?alt=media&token=acd6d9fb-4780-478a-9c44-d57aeeb34cbe"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/04.jpg?alt=media&token=f105655d-6fc8-4963-af97-539a6c3623b2"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/05.jpg?alt=media&token=4b486a08-09eb-4ee0-9e53-b1973621ea29"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/06.jpg?alt=media&token=054bd0f8-2f15-4fc2-97e1-1f9e2383bf07"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/07.jpg?alt=media&token=6ff54f3c-958f-41f9-94ca-e3b1feaa1c2b"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/08.jpg?alt=media&token=729e990b-b6b9-4ff4-86dd-661dcda44929"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <div className="flex items-center justify-center">
              <Form sectionRef={sectionRef} />
            </div>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/09.jpg?alt=media&token=cfb552fa-0752-4db5-83d2-5f314f6788d6"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
          </div>
          <Button sectionRef={sectionRef} />
        </section>
      </main>
    </>
  );
};

export default Home;
