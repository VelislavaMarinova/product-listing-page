import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import TextField from "../ui/TextField";
import useForm from "../hooks/useForm";
import { useAuth } from "../store/auth-context";

const Signin = () => {
    const { signin,err } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const navigate=useNavigate()

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

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(enteredEmailInput, enetredPasswordInput);
        if (!formIsValid) {
            return
        }

        const data = { email: enteredEmailInput, password: enetredPasswordInput }
        try {
            setError('');
            setIsloading(true);
            await signin(data);
            navigate('/')

        } catch (error) {
            setError('Failed to sign in');
        }
        setIsloading(false);
        resetEmilInput();
        resetPasswordInput();
    }

    const emialInputStyles = emailHasError ? "form-control invalid" : "form-control";
    const passwordInputStyles = passwordHasError ? "form-control invalid" : "form-control";


    return (<form onSubmit={formSubmitHandler}>
        <h2>Sign in</h2>
        {error ? <p className="error-text">{error}</p> : ''}
        {err ? <p className="error-text">{err.message}</p> : ''}
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

        <button disabled={isLoading} type="submit">Sign In</button>
        <Link to="/auth/signup">Create Account</Link>
    </form>
    )
}
export default Signin;