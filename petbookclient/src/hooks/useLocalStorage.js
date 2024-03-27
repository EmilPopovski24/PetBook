import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState();

    const setLocalStorage = (value) => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    };

    return [
        state,
        setLocalStorage
    ];
}