import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import TextField from "../ui/TextField";
import { useAuth } from "../store/auth-context";

const Signup = () => {
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const [checkPrivacy, setCheckPrivacy] = useState(false);
    const [checkPrivacyHasError, setCheckPrivacyHasError] = useState(false);

    const navigate = useNavigate();

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
    } = useForm(value => value);

    const {
        value: enetredRePassword,
        isValid: enteredRePasswordIsValid,
        hasError: rePasswordHasError,
        inputBlurHandler: rePasswordBlurHandler,
        valueChangeHandler: rePasswordChangeHandler,
        reset: resetRePassword
    } = useForm(value => value);

    const onCheckPrivacy = () => {
        setCheckPrivacy(previousState => !previousState)
    }

    let formIsValid = false;

    if (
        enteredUsernameIsValid &&
        enteredEmailIsValid &&
        enteredPasswordIsValid &&
        enteredRePasswordIsValid &&
        checkPrivacy
    ) {
        formIsValid = true;
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(enetredEmail, enetredUsername);


        if (!formIsValid) {
            if (!checkPrivacy) {
                setCheckPrivacyHasError(true)
            }
            console.log('not valid');
            return setError('Form is not valid')
        }

        if (enetredPassword !== enetredRePassword) {

            return setError('Passwords don`t match')
        }

        const data = { username: enetredUsername, email: enetredEmail, password: enetredPassword }
        try {
            setError('');
            setIsloading(true)
            await signup(data);
            navigate('/')
        } catch (error) {
            setError('Failed to create an account')
        }
        setIsloading(false)

        resetUsernameInput();
        resetEmailInput();
        resetPassword();
        resetRePassword();
    }

    const usernameInputStyles = usernameHasError ? "form-control invalid" : "form-control";
    const emialInputStyles = emailHasError ? "form-control invalid" : "form-control";
    const passwordInputStyles = passwordHasError ? "form-control invalid" : "form-control";
    const rePasswordInputStyles = rePasswordHasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <h2>Sign up</h2>
            {error ? <p className="error-text">{error}</p> : ''}
            <TextField
                styles={usernameInputStyles}
                label="Username:"
                id="username"
                type="text"
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                value={enetredUsername}
            />
            {usernameHasError && (<p className="error-text">Please enter a valid username!</p>)}
            <TextField
                styles={emialInputStyles}
                label="User email:"
                id="email"
                type="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enetredEmail}
            />
            {emailHasError && (<p className="error-text">Please enter a valid email!</p>)}

            <TextField
                styles={passwordInputStyles}
                label="Password:"
                id="password"
                type="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enetredPassword}
            />
            {passwordHasError && (<p className="error-text">Please enter a valid password!</p>)}

            <TextField
                styles={rePasswordInputStyles}
                label="Password Confirmation:"
                id="re-password"
                type="password"
                onChange={rePasswordChangeHandler}
                onBlur={rePasswordBlurHandler}
                value={enetredRePassword}
            />
            {rePasswordHasError && (<p className="error-text">Please enter a valid re-password!</p>)}
            <TextField
                label="I agree to the Privacy Policy."
                type="checkbox"
                checked={checkPrivacy}
                onChange={onCheckPrivacy}
            />
            {checkPrivacyHasError &&  (<p className="error-text">Please check Privacy Policy!</p>)}

            <button disabled={isLoading} type="submit">Sign Up</button>
            <p>Alredy have an account?</p>
            <Link to="/auth/signin">Sign In</Link>
        </form>
    );
};

export default Signup;