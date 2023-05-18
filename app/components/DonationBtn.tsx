import Link from "next/link";
import { RiPatreonLine } from "react-icons/ri";
function DonationBtn() {
  return (
    <>
      <li className="">
        <Link
          href="https://www.patreon.com/Frontek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiPatreonLine className="inline-block w-4 h-4 text-red-400" />{" "}
          Donación
        </Link>
      </li>
    </>
  );
}

export default DonationBtn;
