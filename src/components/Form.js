/** @jsxImportSource @emotion/react */
import useForm from '../hooks/use-form';
import {
  buttonStyle,
  errorStyle,
  inputStyle,
} from '../styles/simple-input-style';

const Form = () => {
  const nameReg = /^[가-힣]{2,4}$/;
  const emailReg =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const jobReg = /^[가-힣]+$/;

  const {
    enteredInput: enteredName,
    isEnteredValid: isNameValid,
    isInputInvalid: isNameInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    cleanUp: cleanUpName,
  } = useForm(nameReg);

  const {
    enteredInput: enteredEmail,
    isEnteredValid: isEmailValid,
    isInputInvalid: isEmailInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    cleanUp: cleanUpEmail,
  } = useForm(emailReg);

  const {
    enteredInput: enteredJob,
    isEnteredValid: isJobValid,
    isInputInvalid: isJobInvalid,
    inputChangeHandler: jobChangeHandler,
    inputBlurHandler: jobBlurHandler,
    cleanUp: cleanUpJob,
  } = useForm(jobReg);

  let isFormValid = false;
  if (isNameValid && isEmailValid && isJobValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    cleanUpName();
    cleanUpEmail();
    cleanUpJob();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          css={inputStyle(isNameInvalid)}
        />
        {isNameInvalid && (
          <span css={errorStyle(isNameInvalid)}>
            INVALID!!
          </span>
        )}
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          css={inputStyle(isEmailInvalid)}
        />
        {isEmailInvalid && (
          <span css={errorStyle(isEmailInvalid)}>
            INVALID!!
          </span>
        )}
      </div>
      <div>
        <label htmlFor="job">직업</label>
        <input
          id="job"
          type="text"
          value={enteredJob}
          onChange={jobChangeHandler}
          onBlur={jobBlurHandler}
          css={inputStyle(isJobInvalid)}
        />
        {isJobInvalid && (
          <span css={errorStyle(isJobInvalid)}>
            INVALID!!
          </span>
        )}
      </div>
      <div>
        <button
          disabled={!isFormValid}
          css={buttonStyle(!isFormValid)}
        >
          제출하기
        </button>
      </div>
      {isFormValid && <div>VALID</div>}
    </form>
  );
};

export default Form;
