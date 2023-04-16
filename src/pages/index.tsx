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
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
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
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/0001.jpg?alt=media&token=81694143-63eb-4698-b9ec-f8ed8882827c"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/002.jpg?alt=media&token=d809c95b-70f0-4363-98a6-bbd1b24f0dc4"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/003.jpg?alt=media&token=521304d1-bd92-44a0-b7ad-b5d1996bf697"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/004.jpg?alt=media&token=d50c71de-2ef3-4050-be8b-ff8ff4e5bb4d"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/005.jpg?alt=media&token=2613dcea-edc0-4bf7-8707-c0d2e2cd4519"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/006.jpg?alt=media&token=ad419393-51b8-4cc8-8e25-ba1622981c9f"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/007.jpg?alt=media&token=bf7387aa-6c7b-4f60-bdcd-78fe75b92405"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/008.jpg?alt=media&token=94b7bd6a-95eb-4bd5-8f00-6089d6841a6d"
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
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/009.jpg?alt=media&token=007e545b-9ce0-4ef2-a981-6d6cceb6e12d"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
          </div>
          {/* <div className="flex flex-col items-center"> */}
          {/*   <audio controls> */}
          {/*     <source */}
          {/*       src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/Pink%20Floyd%20-%20Breathe%20(HQ%20Audio).mp3?alt=media&token=84dc684a-1682-4ed7-97f8-e9bfe684070a" */}
          {/*       type="audio/ogg" */}
          {/*     /> */}
          {/*     Your browser does not support the audio element. */}
          {/*   </audio> */}
          {/* </div> */}
          {/* <div className="flex flex-col items-center"> */}
          {/*   <video width="320" height="240" controls> */}
          {/*     <source src="" type="video/mp4" /> */}
          {/*     Your browser does not support the video tag. */}
          {/*   </video> */}
          {/* </div> */}
          <Button sectionRef={sectionRef} />
        </section>
      </main>
    </>
  );
};

export default Home;
