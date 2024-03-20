import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { profileServiceFactory } from "../../services/profileService";
import { useService } from "../../hooks/useService";
import "./Profile.css"

export const Profile = () => {

    const profileService = useService(profileServiceFactory)
    const user = useContext(AuthContext);
    const [image, setImage] = useState(0);
    const { imageUrl } = useParams({});

    useEffect(()=> {
        profileService.getOne(image)
            .then(result => {
                setImage(result)
            })
    }, [imageUrl]);

    // console.log(image[2].imageUrl)

    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <button><Link to={'/profile/addphoto'}>Add your Photo</Link></button>
                <img src={image} alt="profile-pic" className="profile-pic"/>
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.userEmail}</li>
                    </ul>         
                {/* <h3>My pets</h3>
                    {pets.map(x=> <ProfilePet key={x._id} {...x} />)}
                    {pets.length === 0 && (
                    <h1>No pet accounts for now</h1>
                )} */}
            </div>
        </>
    )
}