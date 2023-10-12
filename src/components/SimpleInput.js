/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  buttonStyle,
  errorStyle,
  inputStyle,
} from '../styles/simple-input-style';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] =
    useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] =
    useState(false);

  // 유효성 검사 로직
  const enteredNameIsValid = enteredName.trim().length > 2;
  const enteredEmailIsValid = enteredEmail
    .toString()
    .includes('@');
  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid =
    !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputBlurHanlder = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    setEnteredName(''); // 초기화
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
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
        <label htmlFor="email">이메일</label>
        <input
          css={inputStyle(emailInputIsInvalid)}
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {emailInputIsInvalid && (
        <p css={errorStyle(emailInputIsInvalid)}>
          email must include '@'
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
