"use client";
import Link from "next/link";
import ChangingWord from "./SpanComponent";

function Hero() {
  return (
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Dólar en Argentina:</span>{" "}
            {/* <span className="block text-indigo-500 xl:inline">
              Compra: $150 | Venta: $155
            </span> */}
            <ChangingWord />
          </h1>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/blog"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Noticias
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/preguntas"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
