import { useState } from 'react';

const useForm = (regex) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValid = regex.test(enteredInput);
  const isInputInvalid = !isEnteredValid && isTouched;

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
    isEnteredValid,
    isInputInvalid,
    inputChangeHandler,
    inputBlurHandler,
    cleanUp,
  };
};

export default useForm;
