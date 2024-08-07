import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { PetContext } from '../../contexts/PetContext';
import { AuthContext } from '../../contexts/AuthContext';
import './AddPet.css';

export const AddPet = () => {

    const user = useContext(AuthContext);
    const { onAddPetSubmit } = useContext(PetContext);
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        type: '',
        breed: '',
        age: '',
        color: '',
        imageUrl: '', 
        username: user.username
    }, onAddPetSubmit)

    return (
        <>
        <h1 className='addPetHeader'>Add Your Pet</h1>
            <section id ="create-page">
                <form id="create" onSubmit={onSubmit}  method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" values={values.name} onChange={changeHandler} placeholder="Pet name..." className='parameters'/>
                    <hr />
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type" values={values.type} onChange={changeHandler} placeholder="Type..." className='parameters' />
                    <hr />
                    <label htmlFor="breed-title">Breed</label>
                    <input type="text" id="breed" name="breed" values={values.breed} onChange={changeHandler} placeholder="Breed..." className='parameters' />
                    <hr />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" values={values.age} onChange={changeHandler} placeholder="Age..." className='parameters' />
                    <hr />
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" values={values.color}  onChange={changeHandler} placeholder="Color..." className='parameters' />
                    <hr />
                    <label htmlFor="image">Image URL</label> 
                                  
                    <input type="imageUrl" alt="PetPicture" id="imageUrl" name="imageUrl" values={values.imageUrl} onChange={changeHandler} placeholder="Image..." className='parameters' />
                    <hr />
                    <button type="submit" className="addPetBtn">Add Your Pet</button>
                </form>
            </section>
        </>
    )
}