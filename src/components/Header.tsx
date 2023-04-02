import Image from "next/image";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const SubHeader = () => {
  return (
    <div className="fixed top-16 flex h-10 w-screen items-center justify-center py-2">
      <nav>
        <ul className="flex items-center gap-8 text-gray-700">
          <li>Products</li>
          <li>Facebook</li>
          <li>TikTok</li>
          <li>About us</li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="fixed flex h-16 w-screen items-center justify-evenly border-b py-7">
        <nav>
          <ul className="flex items-center gap-3 text-sm">
            <li className="border-r pr-5">Contact</li>
            <li className="flex items-center pr-5">
              English
              <MdKeyboardArrowDown className="text-lg" />
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <CiUser className="text-3xl" />
          </div>
          <div>
            <CiShoppingCart className="text-3xl" />
          </div>
        </div>
      </header>
      <SubHeader />
    </>
  );
};

export default Header;
