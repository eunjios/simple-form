import { useState } from 'react';

const useValidation = (applyValidation) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = applyValidation(enteredInput);
  const inputIsInvalid = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const cleanUp = () => {
    setEnteredInput('');
    setIsTouched(false);
  };

  return {
    enteredInput,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    cleanUp,
  };
};

export default useValidation;
