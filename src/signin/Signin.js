import { Link } from "react-router-dom";
import TextField from "../ui/TextField";
import useForm from "../hooks/useForm";
const Signin = () => {

    const {
        value: enteredEmailInput,
        isValid: enteredEmailIsValid,
        hasError: emailHasError
        ,
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmilInput
    } = useForm(value => value.includes("@"));

    const {
        value: enetredPasswordInput,
        isValid: enteredPasswordIsValid,
        hasError: passwordHasError,
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
        reset: resetPasswordInput
    } = useForm(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(enteredEmailInput, enetredPasswordInput);
        if (!formIsValid) {
            return
        }
        resetEmilInput();
        resetPasswordInput();
    }

    const emialInputStyles = emailHasError ? "form-control invalid" : "form-control";
    const passwordInputStyles = passwordHasError ? "form-control invalid" : "form-control";


    return (<form onSubmit={formSubmitHandler}>

        <TextField
            styles={emialInputStyles}
            label="User email"
            id='email'
            type='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmailInput}

        />
        {emailHasError && (<p className="error-text">Email error</p>)}


        <TextField
            styles={passwordInputStyles}
            label="Password:"
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enetredPasswordInput}
        />
        {passwordHasError && (<p className="error-text">Password error</p>)}

        <button type="submit">Sign In</button>
        <Link to="/auth/signup">Create Account</Link>
    </form>
    )
}
export default Signin;