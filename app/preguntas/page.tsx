"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import AdsComponentHorizontal from "../components/Ads/AdsComponentHorizontal";

export default function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const questions = [
    {
      question: "¿Cómo puedo comprar dólares en Argentina?",
      answer:
        " Para comprar dólares en Argentina, se deben seguir los procedimientos establecidos por el Banco Central de la República Argentina (BCRA). En general, es necesario contar con una cuenta bancaria y cumplir con los requisitos y límites establecidos por las regulaciones cambiarias vigentes. Es recomendable comunicarse con el banco o entidad financiera correspondiente para obtener información específica sobre los pasos a seguir.",
    },
    {
      question:
        "¿Cuál es la diferencia entre el dólar oficial y el dólar blue en Argentina?",
      answer:
        "El término dólar oficial se refiere al tipo de cambio establecido por el gobierno argentino y utilizado para transacciones oficiales. Por otro lado, el término dólar blue se utiliza para hacer referencia al mercado paralelo o informal del dólar, donde el tipo de cambio puede ser diferente al oficial debido a la demanda y oferta en ese mercado. La diferencia entre ambos tipos de cambio puede variar y está sujeta a cambios constantes. Es importante tener en cuenta que el uso del dólar blue puede estar sujeto a restricciones y riesgos adicionales.",
    },
    {
      question: "¿Dónde puedo comprar dólares en Argentina?",
      answer:
        "Puedes comprar dólares en bancos, casas de cambio autorizadas y plataformas digitales especializadas.",
    },
    {
      question: "¿Cómo puedo vender dólares en Argentina?",
      answer:
        "Puedes vender dólares en bancos y casas de cambio autorizadas presentando la documentación requerida.",
    },
    {
      question: "¿Cómo se determina el valor del dólar en Argentina?",
      answer:
        "El valor del dólar en Argentina es determinado principalmente por la oferta y la demanda en el mercado cambiario.",
    },
    {
      question: "¿Cómo afecta la cotización del dólar a la economía argentina?",
      answer:
        "La cotización del dólar puede afectar la economía argentina de diversas formas, incluyendo la inflación, las importaciones y exportaciones, la deuda externa y el nivel de inversión extranjera.",
    },
    {
      question:
        "¿Cuáles son las restricciones para comprar dólares en Argentina?",
      answer:
        "En Argentina existen regulaciones cambiarias que imponen límites y requisitos para la compra de dólares, como la presentación de documentación y restricciones en la cantidad de dólares que se pueden adquirir.",
    },
    {
      question: "¿Es legal tener dólares en Argentina?",
      answer:
        "Sí, es legal tener dólares en Argentina. Sin embargo, es importante cumplir con las regulaciones cambiarias vigentes y declarar la tenencia de dólares en determinadas situaciones, como al ingresar o salir del país con una cantidad específica.",
    },
  ];

  return (
    <>
      <div className="">
        <div className="bg-gray-800 py-12 ">
          <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
            Preguntas Frecuentes
          </h3>
        </div>
        <AdsComponentHorizontal />
        {questions.map((q, i) => (
          <div key={i} className="max-w-2xl mx-auto pt-5 px-12">
            <button
              onClick={() =>
                setOpenQuestionIndex(openQuestionIndex === i ? null : i)
              }
              className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors duration-200 dark:text-black"
            >
              <span className="text-lg font-medium">{q.question}</span>
              {openQuestionIndex === i ? (
                <AiOutlineMinus className="h-5 w-5 text-gray-500" />
              ) : (
                <AiOutlinePlus className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <div
              className={`mt-2 px-4 my-5 bg-gray-100 rounded-lg  overflow-hidden  transition-all duration-500 ${
                openQuestionIndex === i ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 overflow-hidden">{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <AdsComponentHorizontal />
    </>
  );
}
