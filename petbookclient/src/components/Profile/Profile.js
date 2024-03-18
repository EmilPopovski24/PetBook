import { useContext } from "react";
import { ProfilePet } from "./ProfilePet/ProfilePet";
import "./Profile.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Profile = ({
    pets,
}) => {

    const user = useContext(AuthContext);

    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <button><Link to={`/profile/addphoto`}></Link>Add your Photo</button>
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