/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  buttonStyle,
  errorStyle,
  inputStyle,
} from '../styles/simple-input-style';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] =
    useState(false);

  const enteredNameIsValid = enteredName.trim().length > 2;
  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouched;

  const ageInputIsValid = true;

  let formIsValid = false;
  if (enteredNameIsValid && ageInputIsValid) {
    formIsValid = true;
  }

  const nameInputBlurHanlder = (event) => {
    setEnteredNameTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      // enteredNameIsValid의 최신값을 가져옴
      return;
    }
    console.log(enteredName);
    setEnteredName(''); // 초기화
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          css={inputStyle(nameInputIsInvalid)}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHanlder}
        />
      </div>
      {nameInputIsInvalid && (
        <p css={errorStyle(nameInputIsInvalid)}>
          name must not be empty
        </p>
      )}
      <div>
        <button
          disabled={!formIsValid}
          css={buttonStyle(nameInputIsInvalid)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
