import Link from "next/link";
import React from "react";

interface RedButtonProps {
  onClick: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36"
      // onClick={onClick}
    >
      <Link href="/">Cambiar Dolar</Link>
    </button>
  );
};

export default RedButton;
