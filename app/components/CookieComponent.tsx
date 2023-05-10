"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const CookieComponent = () => {
  const cookies = new Cookies();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (!cookies.get("cookieName")) {
      setShowComponent(true);
    }
  }, []);

  const handleAccept = () => {
    cookies.set("cookieName", "accepted", { path: "/" });
    setShowComponent(false);
  };

  if (!showComponent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-gray-200 w-full">
      <p className="text-sm text-gray-700">
        Utilizamos cookies propias y de terceros para mejorar nuestros
        servicios. Si continúa con la navegación, consideraremos que acepta este
        uso.{" "}
        <Link href="/privacidad" className="underline">
          Politicas de privacidad
        </Link>
        ,{" "}
        <Link href="/terminos-y-condiciones" className="underline">
          Terminos y condiciones
        </Link>
      </p>
      <button
        className="px-4 py-2 mt-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-red-300 hover:text-black"
        onClick={handleAccept}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieComponent;
