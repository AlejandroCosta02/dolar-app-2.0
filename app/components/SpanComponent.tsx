import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const colors = ["Oficial", "Blue", "Bolsa", "CCL"];

const ChangingWord = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const currentColor = colors[currentColorIndex];
  const sentence = (
    <span className="text-white">Todas las cotizaciones actualizadas de </span>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.span
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {sentence}
        <br />
        <motion.span
          className="inline-block text-green-200 text-4xl"
          key={currentColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentColor}
        </motion.span>
      </motion.span>
    </AnimatePresence>
  );
};

export default ChangingWord;
