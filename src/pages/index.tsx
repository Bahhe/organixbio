import moment from "moment";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, type FormEvent } from "react";
import { cities } from "~/utils/states";
import { BiLoaderAlt } from "react-icons/bi";

const Button = () => {
  const [show, setShow] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;
    const scrollPosition = window.scrollY + windowHeight;
    if (scrollPosition >= fullHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    if (isBottom) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [isBottom]);

  const goToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goToBottom}
      className={`fixed bottom-2 left-1/2 w-5/6 -translate-x-1/2 rounded-lg border bg-green-500 p-4 capitalize text-white shadow-sm duration-75 hover:scale-105 ${
        !show ? "hidden" : "block"
      }`}
    >
      أشتري الأن
    </button>
  );
};

const Form = () => {
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
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/01.jpg?alt=media&token=396cde7d-2b9b-43bf-a9ec-51e3e0f6f9df"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <div className="flex items-center justify-center">
              <Form />
            </div>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/02.jpg?alt=media&token=6b144903-4f03-40dd-9975-8ce8259d2fb7"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/04.jpg?alt=media&token=bed91c1d-d5cb-4194-8231-e36e7b008207"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/05.jpg?alt=media&token=d7a1c9bc-5ceb-46f9-a5a7-44a818dc4154"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/06.jpg?alt=media&token=94db86b4-a2c6-4719-8cca-18734623ae46"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/07.jpg?alt=media&token=d882403b-4768-4e58-bbe6-45ccc83d8580"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/08.jpg?alt=media&token=98348b7f-2c18-4c6f-8e53-74ce256ced80"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/09.jpg?alt=media&token=d5e36e59-aa05-4f01-b8f8-01293dd304fa"
              }
              width={1920}
              height={1280}
              alt="product image"
            />
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/organixbio.appspot.com/o/10.jpg?alt=media&token=bb42d6c3-4572-4aec-acaa-d08be0aa09ee"
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
          <Form />
          <Button />
        </section>
      </main>
    </>
  );
};

export default Home;
