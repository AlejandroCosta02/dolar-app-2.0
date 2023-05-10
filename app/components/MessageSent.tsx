import Link from "next/link";

function MessageSent() {
  return (
    <>
      <div className="w-3/4  m-auto mt-10 px-5 items-center">
        <p className=" text-3xl">Muchas Gracias!</p>
        <p className="pb-10">Nos Comuicaremos lo antes posible</p>
        <button className="px-3 py-2 text-lg font-semibold rounded leading-5 bg-green-500 text-primary-100 text-white hover:text-white hover:bg-green-700">
          <Link href="/">Volver al Inicio</Link>
        </button>
      </div>
    </>
  );
}

export default MessageSent;
