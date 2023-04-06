import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col sm:flex-row sm:items-center justify-center gap-5 lg:gap-32 p-10">
        <div className="flex flex-col">
          <div>
            <h1 className="pb-2 text-lg font-bold capitalize">location</h1>
            <p>4005 Silver business point algeria</p>
          </div>
          <div>
            <h1 className="pb-2 text-lg font-bold capitalize">contact us</h1>
            <p>324234234234</p>
          </div>
          <div>
            <h1 className="pb-2 text-lg font-bold capitalize">email</h1>
            <p>info@email.com</p>
          </div>
        </div>
        <div>
          <h1 className="pb-2 text-lg font-bold capitalize">your account</h1>
          <ul className="tracking-wide">
            <li>personal info</li>
            <li>orders</li>
            <li>credit slips</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-2 text-lg font-bold capitalize">our company</h1>
          <ul className="tracking-wide">
            <li>legal notice</li>
            <li>secure payment</li>
            <li>contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-2 text-lg font-bold capitalize">products</h1>
          <ul className="tracking-wide">
            <li>delivery</li>
            <li>price drop</li>
            <li>new product</li>
          </ul>
        </div>
      </footer>
      <footer className="bg-pink-400 p-2 text-center text-sm text-white">
        © 2023, organix bio developed by Baha Eddine
      </footer>
    </>
  );
};

export default Footer;
