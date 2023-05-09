"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const questions = [
    {
      question: "Q1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maiores ullam quaerat sequi fuga temporibus.",
    },
    {
      question: "Q2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, hic ullam, perspiciatis numquam eius ea fuga adipisci porro itaque sequi magnam repudiandae facere, maxime aperiam provident voluptatem recusandae placeat ut.",
    },
    {
      question: "Q3",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, iste. Maiores, minima doloremque. Libero soluta perferendis quaerat voluptas odit natus accusantium voluptatem saepe!",
    },
  ];

  return (
    <div className="">
      <div className="bg-gray-800 py-12 ">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          Preguntas Frecuentes
        </h3>
      </div>
      {questions.map((q, i) => (
        <div key={i} className="max-w-2xl mx-auto pt-5 px-12">
          <button
            onClick={() =>
              setOpenQuestionIndex(openQuestionIndex === i ? null : i)
            }
            className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors duration-200"
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
  );
}
