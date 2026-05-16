import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Sunkari Ramesh",
    "I'm a Frontend Web Developer",
    "I'm a React Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        // Incrementally reveal characters
        setEndValue((prev) => prev + 1);
        setCurrentText(texts[index].substring(0, endValue));

        if (endValue >= texts[index].length) {
          // Pause after completing the text
          setTimeout(() => {
            setIsForward(false); // Start hiding text
          }, 1000);
        }
      } else {
        // Incrementally hide characters
        setEndValue((prev) => prev - 1);
        setCurrentText(texts[index].substring(0, endValue));

        if (endValue <= 0) {
          // Move to the next text after hiding
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length); // Cycle to the next text
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
