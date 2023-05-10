"use client";
import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          Contacto
        </h3>
      </div>
      <div className="pt-12 flex flex-col justify-center items-center px-12">
        <form className="w-auto" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-400 p-2 w-full rounded-md"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 font-semibold text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-2 border-gray-400 p-2 w-full rounded-md"
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 font-semibold text-gray-700"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-2 border-gray-400 p-2 w-full rounded-md"
                required
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 font-semibold text-gray-700"
            >
              Asunto
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-400 p-2 w-full rounded-md"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-400 p-2 w-full rounded-md"
              rows={5}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-3 py-2 font-medium rounded leading-5 bg-green-500 text-primary-100 text-black hover:text-white hover:bg-green-700"
          >
            <BiMailSend className="inline-block w-5 h-5" /> Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
