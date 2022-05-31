import { useInput } from "./useInput";


const isEmpty = (value) => value.trim() !== ''
const isEmail = (value) => value.includes('@')

const BasicForm = (props) => {
  const  {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler
  } = useInput(isEmpty)

  const  {
    value: enteredSurname, 
    isValid: enteredSurnameIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler
  } = useInput(isEmpty)

  const  {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput(isEmail)

  let formIsValid = false

  if(enteredNameIsValid) {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }
  }

  const nameClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const surnameClasses = surnameInputHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {nameInputHasError && <p>Please enter ur name</p>}
        </div>
        
        <div className={surnameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredSurname} onChange={surnameChangeHandler} onBlur={surnameBlurHandler} />
          {surnameInputHasError && <p>Please enter ur surname</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p>Please enter ur email</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
