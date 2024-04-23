import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { profileServiceFactory } from '../../services/profileService';
import './PetAccount.css';

export const PetAccount = ({
    onDelete
}) => {

    const { userId } = useContext(AuthContext);
    const { petId } = useParams();//learn more about useParams
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);
    const petService = useService(petServiceFactory);
    const profileService = useService(profileServiceFactory);
    const [petComment, setPetComment] = useState('')
    const [username, setUsername] = useState('');
    const [petComments, setPetComments] = useState([]);

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
        const res = await petService.deletePet(pet._id);
        onDelete()
        return res
    }

    const onLikeSubmit = async(e) => {
        e.preventDefault();
        setLikes(likes + 1)
    }

    const onPetCommentSubmit = async (e) => {
        e.preventDefault();
        const response = await profileService.addPetComment({
            petId,
            username,
            petComment,
        })
        setPet(state => ({
            ...state, 
            petComments: [...petComments, response]
        }))

        setUsername('');
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
                    <li><h3>Likes: {likes}</h3></li>
                    {!isOwner &&(
                        <button className='like-btn' onClick={onLikeSubmit}>Like</button>
                    )}
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
                    <input type="text" id="comment-username" name="username" placeholder="Your name..." value ={username} onChange={(e) => setUsername(e.target.value)}/>
                    <textarea name="comment" id="comment-text" cols="50" rows="3" value={petComment} onChange={(e) => setPetComment(e.target.value) }></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
            <div className="petComments-div">
                <h5>Comments:</h5>
                <ul className='petComments-ul'>
                    {petComments.map(x=> (
                        <li key={x._id} className='petComment-li'>
                            <p><b>{x.username}</b>: {x.petComment}</p>      
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}