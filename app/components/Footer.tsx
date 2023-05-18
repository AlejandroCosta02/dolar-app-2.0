import Link from "next/link";
import DonationBtn from "./DonationBtn";

function Footer() {
  return (
    <>
      <footer className="mt-auto bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">Copyright © 2023</p>
            <ul className="text-sm">
              <li className="inline-block mx-2">
                <Link href="/terminos-y-condiciones">
                  Términos y condiciones
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/privacidad">Políticas de privacidad</Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <DonationBtn />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
