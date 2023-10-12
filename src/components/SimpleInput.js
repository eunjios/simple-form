/** @jsxImportSource @emotion/react */
import {
  buttonStyle,
  errorStyle,
  inputStyle,
} from '../styles/simple-input-style';
import useValidation from '../hooks/use-validation';

const SimpleInput = () => {
  const isNameInputValid = (nameInput) => {
    return nameInput.trim().length > 2;
  };

  const isEmailInputValid = (emailInput) => {
    return emailInput.toString().includes('@');
  };

  const {
    enteredInput: enteredName,
    inputIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHanlder,
    cleanUp: cleanUpNameInput,
  } = useValidation(isNameInputValid);

  const {
    enteredInput: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    cleanUp: cleanUpEmailInput,
  } = useValidation(isEmailInputValid);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    cleanUpNameInput();
    cleanUpEmailInput();
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
