import { useState } from "react"

export const useLocalStorage = () => {

    const [state, setState] = useState();

    return [
        state,
        
    ];
}