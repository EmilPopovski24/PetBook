import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './PetAccount.css';

export const PetAccount = ({
    onDeleteUpdateState
}) => {
    const { userId } = useContext(AuthContext);
    const { petId } = useParams({});//learn more about useParams
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    const navigate = useNavigate();
    
    useEffect(()=> {
        petService.getOne(petId)
            .then(result => {
                setPet(result)
            })
    }, [petId]);

    const onDeletePet = async() => {
        await petService.deletePet(pet._id);
        onDeleteUpdateState()
        navigate('/catalog')
    }

    const isOwner = pet._ownerId === userId;

    return(
        <>
        <div className='pet-account'>
            <button className='ownerBtn'><Link to="/catalog">Go back</Link></button>
            <div className='pet-details'>
                <h3>{pet.name}</h3>
                <h3>Type: {pet.type}</h3>
                <h3>Breed: {pet.breed}</h3>
                <h3>Age: {pet.age}</h3>
            </div>
            {isOwner && (
                <div className='ownerDiv'>
                    <button className='ownerBtn'><Link to={`/catalog/${pet._id}/edit`}> Edit</ Link></button>
                    <button className='ownerBtn' id="delBtn" onClick={onDeletePet}>Delete</button>
                </div>
            )}
        </div>
        </>
    )
}