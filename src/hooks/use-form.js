import { useState } from 'react';
import {
  BsCheck,
  BsExclamationTriangleFill,
} from 'react-icons/bs';

const useForm = (regex) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isEnteredValid = regex.test(enteredInput);
  const isInputInvalid = !isEnteredValid && isTouched;

  let inputIcon = null;
  if (isTouched && isEnteredValid) {
    inputIcon = <BsCheck />;
  } else if (isTouched && !isEnteredValid) {
    inputIcon = <BsExclamationTriangleFill />;
  }

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputFocusHandler = () => {
    setIsFocused(true);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
    setIsFocused(false);
  };

  const cleanUp = () => {
    setEnteredInput('');
    setIsTouched(false);
  };

  return {
    enteredInput,
    isEnteredValid,
    isInputInvalid,
    isFocused,
    inputIcon,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    cleanUp,
  };
};

export default useForm;
