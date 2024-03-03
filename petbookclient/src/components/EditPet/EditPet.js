import { useContext } from "react";
import { useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";


export const EditPet = ({
    onPetEditSubmit
}) => {  
    const { petId } = useParams({});
    const { userId } = useContext(AuthContext);
    const [values, changeHandler, onSubmit, changeHandler] = useForm({
        name: '',
        type: '',
        breed: '',
        age: '',
        color: '',
    }, onPetEditSubmit)


    return(
        <>
        <h1 className='editPetHeader'>Edit Your Pet Details</h1>
            <section id ="edit-page">
                <form id="edit" onSubmit={onSubmit}  method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" values={values.name} onChange={changeHandler}  className='parameters'/>
                    <hr />
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type" values={values.type} onChange={changeHandler} className='parameters' />
                    <hr />
                    <label htmlFor="breed-title">Breed</label>
                    <input type="text" id="breed" name="breed" values={values.breed} onChange={changeHandler}  className='parameters' />
                    <hr />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" values={values.age} onChange={changeHandler}  className='parameters' />
                    <hr />
                    <label htmlFor="color">Color</label>
                    <br />
                    <input type="text" id="color" name="color" values={values.color}  onChange={changeHandler} className='parameters' />
                    <hr />
                    <button type="submit" className="addPetBtn">Add Your Pet</button>
                </form>
            </section>
        </>
    )
}