import { useState } from 'react';

 const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : null;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    const clearLocalStorageValue = ()=>{
        localStorage.removeItem(key);
        setValue(null)
    }

    return [
        value,
        setLocalStorageValue,
        clearLocalStorageValue
    ];
};

export default useLocalStorage;