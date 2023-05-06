import Link from "next/link";
import React from "react";

interface NavbarProps {
  isOpen: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
}

const Navbar: React.ForwardRefExoticComponent<NavbarProps> = React.forwardRef(
  ({ isOpen, navRef, ...props }) => {
    return (
      <nav
        ref={navRef}
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-16 left-0 bg-gray-800 w-64 h-1/2 border-r border-gray-200 transform transition ease-in-out duration-300 z-20`}
        {...props}
      >
        <ul className="p-4">
          <li className="py-2 border-b border-gray-200">
            <Link
              href="/dolaroficial/compra"
              className="text-white font-bold block"
            >
              Dolar Oficial
            </Link>
          </li>
          <li className="py-2 border-b border-gray-200">
            <Link
              href="/dolarblue/compra"
              className="text-white font-bold block"
            >
              Dolar Blue
            </Link>
          </li>
          <li className="py-2 border-b border-gray-200">
            <Link
              href="/dolarbolsa/compra"
              className="text-white font-bold block"
            >
              Dolar Bolsa
            </Link>
          </li>
          <li className="py-2 border-b border-gray-200">
            <a href="#" className="text-white font-bold block">
              Dolar Contado con Liqui
            </a>
          </li>
        </ul>
      </nav>
    );
  }
);

export default Navbar;
