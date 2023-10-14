import React, { useState, ChangeEvent } from 'react';
import {
  BsCheck,
  BsExclamationTriangleFill,
} from 'react-icons/bs';

export type InputChangeHandler = (
  event: ChangeEvent<HTMLInputElement>
) => void;
export type InputBlurHandler = () => void;
export type CleanUp = () => void;

interface FormReturn {
  enteredInput: string;
  isEnteredValid: boolean;
  isInputInvalid: boolean;
  inputIcon: JSX.Element | null;
  inputChangeHandler: InputChangeHandler;
  inputBlurHandler: InputBlurHandler;
  cleanUp: CleanUp;
}

const useForm = (regex: RegExp): FormReturn => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValid: FormReturn['isEnteredValid'] =
    regex.test(enteredInput);
  const isInputInvalid: FormReturn['isInputInvalid'] =
    !isEnteredValid && isTouched;

  let inputIcon: FormReturn['inputIcon'] = null;
  if (isTouched && isEnteredValid) {
    inputIcon = <BsCheck />;
  } else if (isTouched && !isEnteredValid) {
    inputIcon = <BsExclamationTriangleFill />;
  }

  const inputChangeHandler: FormReturn['inputChangeHandler'] =
    (event) => {
      setEnteredInput(event.target.value);
    };

  const inputBlurHandler: FormReturn['inputBlurHandler'] =
    () => {
      setIsTouched(true);
    };

  const cleanUp: FormReturn['cleanUp'] = () => {
    setEnteredInput('');
    setIsTouched(false);
  };

  return {
    enteredInput,
    isEnteredValid,
    isInputInvalid,
    inputIcon,
    inputChangeHandler,
    inputBlurHandler,
    cleanUp,
  };
};

export default useForm;
