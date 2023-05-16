"use client";
import { useState } from "react";
import { FaArrowsAltV } from "react-icons/fa";
import { US, AR } from "country-flag-icons/react/3x2";

function ConverionVenta({ dolarValue }: { dolarValue: number }) {
  const [value, setValue] = useState<number | undefined | null>();
  const [result, setResult] = useState<number>(0);

  const [effectButton, setEffectButton] = useState(false);
  const [changeLayout, setChangeLeyout] = useState(true);

  const handleValueChange_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setResult(newValue / dolarValue);
  };
  const handleValueChange_2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setResult(newValue * dolarValue);
  };
  const arrowButton = () => {
    setChangeLeyout(!changeLayout);
    setEffectButton(!effectButton);
    setResult(0);
    setValue(null);
  };
  return (
    <>
      {changeLayout ? (
        <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-28">
          {/* USER INPUT */}
          <div className="relative">
            <input
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-gray-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              id="value-input"
              placeholder="0.00"
              value={value ?? ""}
              onChange={handleValueChange_1}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20   bg-gray-800 rounded-full px-8">
              {/* <span className="text-gray-500 text-3xl">ARS</span> */}
              <AR title="United States" className=" w-14 h-auto rounded-full" />
            </div>
          </div>
          {/* EXCHANGE BUTTON */}
          <div className=" flex flex-row space-x-10 my-5">
            <button
              onClick={arrowButton}
              className={`${
                effectButton && "animate-wiggle"
              } bg-gray-800 p-5 px-20 text-white rounded-md hover:bg-red-500 hover:text-black`}
            >
              <FaArrowsAltV className="text-xl" />
            </button>
          </div>
          {/* RESULT */}
          <div className="relative">
            <input
              type="text"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-gray-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
              value={result ? result.toFixed(2) : "0.00"}
              readOnly
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20  bg-gray-800 rounded-full px-8">
              {/* <span className="text-gray-500 text-3xl">USD</span> */}
              <US title="United States" className="w-14 h-auto rounded-full" />
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-10">
          {/* USER INPUT */}
          <div className="relative">
            <input
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-gray-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              id="value-input"
              placeholder="0.00"
              value={value ?? ""}
              onChange={handleValueChange_2}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 bg-gray-800 rounded-full px-8">
              {/* <span className="text-gray-500 text-3xl">USD</span> */}
              <US title="United States" className="w-14 h-auto rounded-full" />
            </div>
          </div>
          {/* EXCHANGE BUTTON */}
          <div className=" flex flex-row space-x-10 my-5">
            <button
              onClick={arrowButton}
              className={`${
                effectButton && "animate-wiggle"
              } bg-gray-800 p-5 px-20 text-white rounded-md hover:bg-red-500 hover:text-black`}
            >
              <FaArrowsAltV className="text-xl" />
            </button>
          </div>
          {/* RESULT */}
          <div className="relative">
            <input
              type="text"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-gray-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
              value={result ? result.toFixed(2) : "0.00"}
              readOnly
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 bg-gray-800 rounded-full px-8">
              {/* <span className="text-gray-500 text-3xl">ARS</span> */}
              <AR title="United States" className="w-14 h-auto rounded-full" />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default ConverionVenta;
