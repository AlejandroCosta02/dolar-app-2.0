"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BiMailSend } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageSent from "../components/MessageSent";
import DonationBtn from "../components/DonationBtn";
import AdsDisplay from "../components/Ads/AdsDisplay";
function ContactForm() {
  const notify = () =>
    toast.success("Mensaje Enviado Correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [state, handleSubmit] = useForm("xqkojkjn");
  if (state.succeeded) {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <MessageSent />
      </>
    );
  }
  return (
    <>
      <div className="bg-gray-800 py-12 ">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          Contacto
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="mx-12 pt-8 md:mx-60">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="full-name" className="text-gray-700 font-semibold">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="nombre y apellido"
            required={true}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />

          <label htmlFor="email" className="text-gray-700 font-semibold">
            Correo Electronico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            required={true}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="text-gray-700 font-semibold">
            Mensaje
          </label>
          <textarea
            required={true}
            id="message"
            name="message"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            onClick={notify}
            type="submit"
            disabled={state.submitting}
            className="px-3 py-2 text-lg font-semibold rounded leading-5 bg-green-500 text-primary-100 text-white hover:text-white hover:bg-green-700"
          >
            <BiMailSend className="w-8 h-8 inline-block mr-2" />
            Submit
          </button>
          <DonationBtn />
        </div>
      </form>
      <div className="flex flex-col mx-auto items-center py-8">
        <AdsDisplay />
      </div>
    </>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
