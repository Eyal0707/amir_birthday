import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const englishLetterRegex = /^[a-zA-Z ]*$/;

const useRiddle = (
  correctAnswer: string,
  nextPagePath: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  function onAnswerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (englishLetterRegex.test(value) || value.length === 0) {
      const lowercasedValue = value.toLocaleLowerCase();
      setAnswer(lowercasedValue);
      if (lowercasedValue === correctAnswer) {
        setTimeout(() => {
          navigate(nextPagePath);
        }, 500);
      }
    }
  }

  return [answer, onAnswerChange];
};

export default useRiddle;
