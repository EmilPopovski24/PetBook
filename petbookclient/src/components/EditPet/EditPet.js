import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { petServiceFactory } from "../../services/petService";
import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { PetContext } from "../../contexts/PetContext";
import './EditPet.css';

export const EditPet = () => {  
    
    const { onPetEditSubmit } = useContext(PetContext);
    const { petId } = useParams();
    const petService = useService(petServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id:'',
        name: '',
        type: '',
        breed: '',
        age: '',
        color: '',
        imageUrl:''
    }, onPetEditSubmit)

    useEffect(()=> {
        petService.getOne(petId)
            .then(result => {
                changeValues(result);
            })
    },[petId])
 
    return(
        <>
        <section className="edit-page">
            <h1 className='editPetHeader'>Edit Your Pet Details</h1>
                <form id="edit" onSubmit={onSubmit}  method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" value={values.name} onChange={changeHandler}  className='parameters'/>
                    <hr />
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type" value={values.type} onChange={changeHandler} className='parameters' />
                    <hr />
                    <label htmlFor="breed-title">Breed</label>
                    <input type="text" id="breed" name="breed" value={values.breed} onChange={changeHandler}  className='parameters' />
                    <hr />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" value={values.age} onChange={changeHandler}  className='parameters' />
                    <hr />
                    <label htmlFor="color">Color</label>
                    <br />
                    <input type="text" id="color" name="color" value={values.color}  onChange={changeHandler} className='parameters' />
                    <hr />
                    <label htmlFor="task-title">Image URL</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler}  className='parameters' />
                    <button className='ownerBtn'><Link to={`/catalog/${values._id}`}>Go back</Link></button>
                    <button type="submit" className="editPetBtn">Edit</button>           
                </form>
            </section>
        </>
    )
};