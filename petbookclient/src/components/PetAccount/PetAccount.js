import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './PetAccount.css';

export const PetAccount = ({
    petOwner
}) => {

    const { userId } = useContext(AuthContext);
    const { petId } = useParams({});//learn more about useParams
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);
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

    const onLikeSubmit = () => {
        setLikes(likes + 1)
    };

    const isOwner = pet._ownerId === userId;

    return(
        <>
            <div className='pet-account'>     
                <h1 className='petAccount-name'>{pet.name}</h1>
                <img src={pet.imageUrl} alt={pet.name} className='petAccount-pic'/>           
                <ul>
                    <li><h3>Type: {pet.type}</h3></li>
                    <li><h3>Breed: {pet.breed}</h3></li>
                    <li><h3>Age: {pet.age}</h3></li>
                    <li><h3>Color: {pet.color}</h3></li>
                    <li><h3>Owner: </h3></li>
                    <li><h3>Likes: {likes}</h3></li>
                    <button className='like-btn' onClick={onLikeSubmit}>Like</button>
                </ul> 
                        <div className='actionsDiv'>
                            <div className='go-back'>
                                <button className='ownerBtn'><Link to="/catalog">Go to Catalog</Link></button>
                            </div>
                        {isOwner && (
                            <div className='owner-buttons'>
                            <button className='ownerBtn'><Link to={`/catalog/${pet._id}/edit`}> Edit</ Link></button>
                            <button className='ownerBtn' id="delBtn" onClick={onDeletePet}>Delete</button>
                            </div>
                        )}
                    </div>
                 
            </div>
        </>
    )
}