import { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css"
import { profileServiceFactory } from "../../services/profileService";
import { useService } from "../../hooks/useService";

export const Profile = () => {
    const profileService = useService(profileServiceFactory)
    const user = useContext(AuthContext);
    const [imageUrl, setImage] = useState();
    // const imageUrl = useParams({});

    useEffect(()=> {
        profileService.getOne(imageUrl)
            .then(result => {
                setImage(result)
            })
    }, []);

    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <button><Link to={'/profile/addphoto'}>Add your Photo</Link></button>

                <img src={imageUrl} alt="profile-pic" className="profile-pic"/>
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