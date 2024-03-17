import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './PetAccount.css';

export const PetAccount = () => {
    const { userId } = useContext(AuthContext);
    const user = useContext(AuthContext);
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
        navigate('/catalog');
    }
   
    const isOwner = pet._ownerId === userId;
    console.log(user)

    return(
        <>
        <div className='pet-account'>     
            <div className='pet-name'>
                <h1 className='petAccount-name'>{pet.name}</h1>
                <img src={pet.imageUrl} alt={pet.name} className='petAccount-pic'/>
            </div>
            <div className='pet-details'>
                <h3>Type: {pet.type}</h3>
                <h3>Breed: {pet.breed}</h3>
                <h3>Age: {pet.age}</h3>
                <h3>Owner: {user.username} </h3>
                {isOwner && (
                    <div className='actionsDiv'>
                        <button className='ownerBtn'><Link to="/catalog">Go to Catalog</Link></button>
                        <button className='ownerBtn'><Link to={`/catalog/${pet._id}/edit`}> Edit</ Link></button>
                        <button className='ownerBtn' id="delBtn" onClick={onDeletePet}>Delete</button>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}