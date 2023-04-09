import Image from "next/image";
import { type ChangeEvent, type FormEvent, useState, useEffect } from "react";
import { cities } from "~/utils/states";

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

const MyForm = () => {
  const [state, setState] = useState({ name: "", number: null, city: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const number = state.number;

    if (!Number(number)) {
      alert("Your phone number must be a number");
      return;
    }

    console.log("submitting", state);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg border p-10 shadow-sm"
    >
      <div>
        <p className="pb-1 font-bold capitalize">name:</p>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="name.."
          className="rounded-lg border p-4 shadow-sm"
        />
      </div>
      <p className="pb-1 font-bold capitalize">city:</p>
      <select className="w-full rounded-lg border bg-white p-4 shadow-sm">
        {cities.map((w, i) => (
          <option value={w} key={i}>
            {i + 1} {w}
          </option>
        ))}
      </select>
      <div>
        <p className="pb-1 font-bold capitalize">phone number:</p>
        <input
          type="number"
          name="number"
          onChange={handleChange}
          placeholder="number..."
          className="rounded-lg border p-4 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg border bg-green-500 p-4 capitalize text-white shadow-sm "
      >
        order now
      </button>
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
        <MyForm />
      </div>
      <Button />
    </section>
  );
};

export default Images;
