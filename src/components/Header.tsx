import Image from "next/image";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TfiViewList } from "react-icons/tfi";

const Menu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav
      className={`fixed left-0 top-0 z-20 h-screen w-96 ${
        showMenu ? "" : "-translate-x-full"
      } bg-white duration-300`}
    >
      <RxCross1
        className="absolute right-10 top-10 cursor-pointer text-xl"
        onClick={() => setShowMenu(false)}
      />
    </nav>
  );
};

const SubHeader = () => {
  return (
    <div className="absolute top-20 z-10 flex h-10 w-screen items-center justify-center py-2 backdrop-blur-lg">
      <nav>
        <ul className="flex items-center gap-8 text-gray-700">
          <Link href="/products" className="cursor-pointer">
            Products
          </Link>
          <li className="cursor-pointer">Facebook</li>
          <li className="cursor-pointer">TikTok</li>
          <li className="cursor-pointer">About us</li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="absolute z-10 flex h-20 w-screen items-center justify-evenly border-b py-7 backdrop-blur-lg">
        <nav className="flex-1">
          <ul className="flex items-center justify-center gap-3 text-sm">
            <li className="lg:hidden">
              <TfiViewList
                onClick={() => setShowMenu(true)}
                className="cursor-pointer text-lg"
              />
            </li>
            <li className="hidden border-r pr-5 text-lg lg:block">
              <Link href="#">Contact</Link>{" "}
            </li>
            <li className="hidden cursor-pointer items-center pr-5 text-lg lg:flex">
              English
              <MdKeyboardArrowDown className="text-lg" />
            </li>
          </ul>
        </nav>
        <Link href="/" className="flex flex-1 justify-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className=""
          />
        </Link>
        <div className="flex flex-1 items-center justify-center gap-5">
          <div>
            <CiUser className="cursor-pointer text-3xl hover:text-violet-500" />
          </div>
          <div>
            <CiShoppingCart className="cursor-pointer text-3xl hover:text-violet-500" />
          </div>
        </div>
      </header>
      <SubHeader />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Header;
