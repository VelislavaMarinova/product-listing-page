import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import TextField from "../ui/TextField";


const Signup = () => {
    const {
        value: enetredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameHasError,
        inputBlurHandler: usernameBlurHandler,
        valueChangeHandler: usernameChangeHandler,
        reset: resetUsernameInput
    } = useForm(value => value.trim() !== '');

    const {
        value: enetredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmailInput
    } = useForm(value => value.includes("@"));

    const {
        value: enetredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordHasError,
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
        reset: resetPassword
    } = useForm(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(enetredEmail,enetredUsername);
        if (!formIsValid) {
            return
        }
        resetUsernameInput();
        resetEmailInput();
        resetPassword();
    }

    const usernameInputStyles = usernameHasError ? "form-control invalid" : "form-control";
    const emialInputStyles = emailHasError ? "form-control invalid" : "form-control";
    const passwordInputStyles = passwordHasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <TextField
                styles={usernameInputStyles}
                label="Username:"
                id="username"
                type="text"
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                value={enetredUsername}
            />
            {usernameHasError && (<p className="error-text">Name must not be empty</p>)}
            <TextField
                styles={emialInputStyles}
                label="User email:"
                id="email"
                type="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enetredEmail}
            />
            {emailHasError && (<p className="error-text">Email error</p>)}

            <TextField
                styles={passwordInputStyles}
                label="Password:"
                id="password"
                type="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enetredPassword}
            />
            {passwordHasError && (<p className="error-text">pass error</p>)}

            <input type="checkbox" />
            <label htmlFor="">I agree to the Privacy Policy.</label>
            <button type="submit">Sign Up</button>
            <p>Alredy have an account?</p>
            <Link to="/auth/signin">Sign In</Link>
        </form>
    );
};
export default Signup;