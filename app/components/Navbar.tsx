import Link from "next/link";
import Image from "next/image";
import Logow from "../public/logo-w.svg";
import { BiMailSend } from "react-icons/bi";
function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white w-full">
      <Link href="/">
        <Image
          src={Logow}
          width={32}
          height={32}
          color="white"
          alt="logo"
          className=""
        />
      </Link>
      <p className="px-3 py-2 font-medium rounded text-black  leading-5 bg-green-400 text-primary-100 hover:text-white hover:bg-green-700">
        <Link className="flex" href="/contacto">
          <BiMailSend className="text-lg inline-block w-5 h-5" /> Contacto
        </Link>
      </p>
    </nav>
  );
}

export default Navbar;
