import Link from "next/link";
import Image from "next/image";
import Logow from "../public/logo-w.svg";
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
      <p>
        <Link href="/contacto">Contacto</Link>
      </p>
    </nav>
  );
}

export default Navbar;
