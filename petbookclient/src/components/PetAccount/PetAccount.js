import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const PetAccount = () => {
    const { userId } = useContext(AuthContext);
    const { petId } = useParams({});//learn more about useParams
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    
    useEffect(()=> {
        petService.getOne(petId)
            .then(result => {
                setPet(result)
            })
    }, [petId]);

    const isOwner = pet._ownerId === userId;
   
    return(
        <>
        <button><Link to="/catalog">Go back</Link></button>
        <h3>{pet.name}</h3>
        <h3>Type: {pet.type}</h3>
        <h3>Breed: {pet.breed}</h3>
        <h3>Age: {pet.age}</h3>
        <h3>Color: {pet.color}</h3>
        {isOwner && (
            <div className='ownerDiv'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )}
        </>
    )
}