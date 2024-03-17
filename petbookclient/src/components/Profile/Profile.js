import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfilePet } from "./ProfilePet/ProfilePet";
import "./Profile.css"

export const Profile = ({
    pets
}) => {

    const user = useContext(AuthContext);
    const [image, setImage] = useState([]);
    
    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <img src="" alt="profile-pic" className="profile-pic"/>
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.userEmail}</li>
                    </ul>         
                <h3>My pets</h3>
                    {pets.map(x=> <ProfilePet key={x._id} {...x} />)}
                    {pets.length === 0 && (
                    <h1>No pet accounts for now</h1>
                )}
            </div>
        </>
    )
}