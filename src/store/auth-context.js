import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [auth, setToken, removeToken] = useLocalStorage('auth', {});
    console.log(auth,'auth');
    // const [currentUser, setCurrentUser] = useState();
    const [err,setErr]=useState('')

    function signup(data) {
        fetch('http://localhost:3200/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                // setTotalLengthOfResult(response.headers.get("X-Total-Count"));
                return response.json();
            })
            .then((user) => {
                // setCurrentUser(user);
                setToken(user)
                console.log(user, "response");
            })
            .catch((err) => {
                console.log("error");
                // setError(err.message || "An error occurred.");
            })
        // .finally(() => {
        //     setIsLoading(false);
        // });


    }

    function signin(data) {
        fetch('http://localhost:3200/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((errorData) => {
                        console.log(errorData);
                        if(errorData==='Incorrect password' || errorData ==='Cannot find user'){

                            throw new Error("Incorrect email or password");
                        }else{
                            throw new Error(errorData);
                        }
                      });
                }

                // setTotalLengthOfResult(response.headers.get("X-Total-Count"));
                return response.json();
            })
            .then((user) => {
                // setCurrentUser(user);
                setToken(user);
                console.log(user, "response");
            })
            .catch((err) => {
                setErr(err)
            })
        // .finally(() => {
        //     setIsLoading(false);
        // });


    }

    function logout(){
        // setCurrentUser(null);
        removeToken()
    }
    // useEffect(()=>{},[])

    const value = {
        // currentUser,
        signup,
        signin,
        logout,
        err,
        auth
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}