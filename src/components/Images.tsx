import Image from "next/image";
import { useState, useEffect, type FormEvent } from "react";
import { cities } from "~/utils/states";

type ApiResponse = {
  data: {
    tableRange: string;
  };
};

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
      order now
    </button>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      city: city ? city : "Adrar",
      phone,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    // eslint-disable-next-line
    const content: ApiResponse = await rawResponse.json();

    // print to screen
    alert(content.data.tableRange);

    // Reset the form fields
    setPhone("");
    setName("");
    setCity("");
  };

  return (
    <form
      className="my-10 flex flex-col gap-10 rounded-lg border p-10 shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="">
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          className="sm:text-md block w-64 rounded-md border border-gray-300 p-5 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Your Name"
        />
      </div>
      <div className="">
        <label htmlFor="city" className="font-semibold">
          City
        </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
          className="sm:text-md block w-64 rounded-md border border-gray-300 bg-transparent p-5 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
        >
          {cities.map((c, i) => (
            <option key={i} value={c}>
              {i + 1}- {c}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <label htmlFor="phone" className="font-semibold">
          Phone
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
          className="sm:text-md block w-64 rounded-md border border-gray-300 p-5 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Your Phone"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex w-64 items-center justify-center rounded-md bg-green-600 px-2 py-3 text-sm text-xl text-white shadow"
        >
          Order
        </button>
      </div>
    </form>
  );
};

const Images = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-10 pt-28 lg:w-2/3">
      <div>
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
      </div>
      <div className="flex flex-col items-center">
        <audio controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/Pink%20Floyd%20-%20Breathe%20(HQ%20Audio).mp3?alt=media&token=84dc684a-1682-4ed7-97f8-e9bfe684070a"
            type="audio/ogg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="flex flex-col items-center">
        <video width="320" height="240" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-center">
        <Form />
      </div>
      <Button />
    </section>
  );
};

export default Images;
