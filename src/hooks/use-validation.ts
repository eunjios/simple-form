import { useState } from 'react';

interface ValidationResult {
  enteredInput: string;
  inputIsValid: boolean;
  inputIsInvalid: boolean;
  inputChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  inputBlurHandler: (
    event: React.FocusEvent<HTMLInputElement>
  ) => void;
  cleanUp: () => void;
}

export type ValidationFunction = (input: string) => boolean;

const useValidation = (
  applyValidation: ValidationFunction
): ValidationResult => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = applyValidation(enteredInput);
  const inputIsInvalid = !inputIsValid && isTouched;

  const inputChangeHandler: ValidationResult['inputChangeHandler'] =
    (event) => {
      setEnteredInput(event.target.value);
    };

  const inputBlurHandler: ValidationResult['inputBlurHandler'] =
    (event) => {
      setIsTouched(true);
    };

  const cleanUp: ValidationResult['cleanUp'] = () => {
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
