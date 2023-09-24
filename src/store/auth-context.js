import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export async function signup(data) {
    try {
        const response = await fetch('http://localhost:3200/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Something went wrong');
        }

        const user = await response.json();
        return user;
    } catch (error) {
        throw error;
    }
};

export async function signin(data) {
    try {
        const response = await fetch('http://localhost:3200/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData === 'Incorrect password' || errorData === 'Cannot find user') {
                throw new Error('Incorrect email or password');
            } else {
                throw new Error(errorData.error || 'Something went wrong');
            }
        }

        const user = await response.json();
        return user;
    } catch (error) {
        throw error;
    }
};

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [auth, setToken, removeToken] = useLocalStorage('auth', {});
    const [error, setError] = useState('');

    async function handleSignup(data) {
        try {
            const user = await signup(data);
            setToken(user);
        } catch (error) {
            setError(error.message);
        }
    }

    async function handleSignin(data) {
        try {
            const user = await signin(data);
            setToken(user);
        } catch (error) {
            setError(error.message);
        }
    }


    function handleLogout() {
        removeToken();
    };

    const value = {
        auth,
        error,
        signup: handleSignup,
        signin: handleSignin,
        logout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};