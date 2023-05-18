import Link from "next/link";
import { RiPatreonLine } from "react-icons/ri";
function DonationBtn() {
  return (
    <>
      <Link
        href="https://www.patreon.com/Frontek"
        className="inline-block mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiPatreonLine className="inline-block w-4 h-4 text-red-400" /> Donación
      </Link>
    </>
  );
}

export default DonationBtn;
