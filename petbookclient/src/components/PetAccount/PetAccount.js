import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { profileServiceFactory } from '../../services/profileService';
import { usePetContext } from '../../contexts/PetContext';
import './PetAccount.css';

export const PetAccount = () => {

    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { petId } = useParams();
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    const profileService = useService(profileServiceFactory);
    const [petComment, setPetComment] = useState('');
    const [petComments, setPetComments] = useState([]);
    const { deletePet } = usePetContext();

    useEffect(()=> {
        petService.getOne(petId)
            .then(result => {
                setPet(result)
                return profileService.getAllPetComments(petId)   
            })
            .then(result => {
                setPetComments(result)
            })
    }, [petId]);

    const onDeletePet = async() => {
        // eslint-disable-next-line
        const result = confirm((`Are you sure you want to delete ${pet.name}`))
            if(result) {
                await deletePet(pet._id);
            }
        navigate("/catalog")
    }

    const onPetCommentSubmit = async(e) => {
        e.preventDefault();
        const response = await profileService.addPetComment({
            petId,
            petComment,
        })
        setPet(state => ({
            ...state, 
            petComments: [...petComments, response]
        }))

        setPetComment('');
    }

    const isOwner = pet._ownerId === userId;
    
    return(
    <>
    <div className='pet-account-page'>
            <div className='pet-account'>     
                <h1 className='petAccount-name'>{pet.name}</h1>
                <img src={pet.imageUrl} alt={pet.name} className='petAccount-pic'/>           
                <ul>         
                    <li><h3>Type: {pet.type}</h3></li>
                    <li><h3>Breed: {pet.breed}</h3></li>
                    <li><h3>Age: {pet.age}</h3></li>
                    <li><h3>Color: {pet.color}</h3></li>
                    <li><h3>Owner: {pet.username}</h3></li>

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
               <div className="post-comment">
            <div className="addComment-div">
                <form className="addComment-form" onSubmit={onPetCommentSubmit}>
                    <textarea name="comment" id="comment-text" cols="50" rows="3" value={petComment} onChange={(e) => setPetComment(e.target.value) }></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
            <div className="petComments-div">
                <h5>Comments:</h5>
                <ul className='petComments-ul'>  
                    {petComments.length > 0 && (petComments?.map(x=> (
                        <li key={x._id} className='petComment-li'>
                            <p><b>{x.author.username}</b>: {x.petComment}</p>  
                            <hr />    
                        </li>
                    )))}
                    {petComments.length === 0 && (
                        <h5>No comments</h5>
                    )}
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}