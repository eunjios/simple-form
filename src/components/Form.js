/** @jsxImportSource @emotion/react */
import useForm from '../hooks/use-form';
import {
  actionStyle,
  advancedInputStyle,
  iconStyle,
  inputWithIconContainer,
  submitButtonStyle,
} from '../styles/form-style';

const Form = () => {
  const nameReg = /^[가-힣]{2,4}$/;
  const emailReg =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const jobReg = /^[가-힣]+$/;

  const {
    enteredInput: enteredName,
    isEnteredValid: isNameValid,
    isInputInvalid: isNameInvalid,
    inputIcon: nameInputIcon,
    inputChangeHandler: nameChangeHandler,
    inputFocusHandler: nameFocusHandler,
    inputBlurHandler: nameBlurHandler,
    cleanUp: cleanUpName,
  } = useForm(nameReg);

  const {
    enteredInput: enteredEmail,
    isEnteredValid: isEmailValid,
    isInputInvalid: isEmailInvalid,
    inputIcon: emailInputIcon,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    cleanUp: cleanUpEmail,
  } = useForm(emailReg);

  const {
    enteredInput: enteredJob,
    isEnteredValid: isJobValid,
    isInputInvalid: isJobInvalid,
    inputIcon: jobInputIcon,
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
        <div css={inputWithIconContainer}>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            onFocus={nameFocusHandler}
            onBlur={nameBlurHandler}
            css={advancedInputStyle(isNameInvalid)}
          />

          <i css={iconStyle(isNameInvalid)}>
            {nameInputIcon}
          </i>
        </div>
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <div css={inputWithIconContainer}>
          <input
            id="email"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            css={advancedInputStyle(isEmailInvalid)}
          />
          <i css={iconStyle(isEmailInvalid)}>
            {emailInputIcon}
          </i>
        </div>
      </div>
      <div>
        <label htmlFor="job">직업</label>
        <div css={inputWithIconContainer}>
          <input
            id="job"
            type="text"
            value={enteredJob}
            onChange={jobChangeHandler}
            onBlur={jobBlurHandler}
            css={advancedInputStyle(isJobInvalid)}
          />
          <i css={iconStyle(isJobInvalid)}>
            {jobInputIcon}
          </i>
        </div>
      </div>
      <div css={actionStyle}>
        <button
          disabled={!isFormValid}
          css={submitButtonStyle(!isFormValid)}
        >
          제출하기
        </button>
      </div>
    </form>
  );
};

export default Form;
