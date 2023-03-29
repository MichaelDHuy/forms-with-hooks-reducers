import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHanndler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = event => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName + ' ' + enteredEmail);

    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
  };
  
  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control"; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHanndler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
      <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} 
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
