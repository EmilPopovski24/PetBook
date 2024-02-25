import { useState } from 'react'


export const useForm = () => {
    const [values, setValues] = useState(initialValues, onSubmitHandler);

    const changeHandler = (e) => {
    setValues(state =>({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values)
    }

    // const changeValues = (newValues)

    return {
        values, 
        changeHandler,
        onSubmit
    }
}