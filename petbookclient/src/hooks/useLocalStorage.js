import { useState } from "react"

export const useLocalStorage = () => {

    const [state, setState] = useState();

    const setLocalStorage = (value) => {
        setState(value)
    };

    return [
        state,
        setLocalStorage
    ];
}