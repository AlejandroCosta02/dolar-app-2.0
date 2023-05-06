"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function NavDolar({ href, href_1 }: { href: string; href_1: string }) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const activateEffect_1 = () => {
    setIsActive(true);
  };
  return (
    <>
      <nav className="flex flex-row justify-between items-center h-16 px-5 bg-gray-800 mb-10  m-auto rounded-2xl  w-1/2 text-xl md:space-y-11">
        <ul className="flex flex-row items-center md:space-x-20 m-auto text-center sm:space-x-3">
          <li className="mr-4 text-white text-md cursor-pointer md:text-2xl text-center">
            <Link
              href={href}
              onClick={activateEffect_1}
              className={
                usePathname() === href
                  ? ` animate-pulse rounded-md border-b-8 border-green-500`
                  : "opacity-50"
              }
            >
              Compra
            </Link>
          </li>

          <li className="mr-4 text-white text-md p-3 cursor-pointer md:text-2xl text-center">
            <Link
              href={href_1}
              className={
                usePathname() === href_1
                  ? " animate-pulse rounded-md border-b-8 border-red-500"
                  : "opacity-50"
              }
            >
              Venta
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavDolar;
