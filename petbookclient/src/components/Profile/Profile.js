import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css"

export const Profile = ({
    image
}) => {



    return(
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <div className="personal-info">
                <img src={image.imageUrl} alt="profile-pic" className="profile-pic"/>
                <button className="add-photo"><Link to={'/profile/addphoto'}>Add your Photo</Link></button>
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.userEmail}</li>
                    </ul>   
                </div>     
                {/* <h3>My pets</h3>
                    {pets.map(x=> <ProfilePet key={x._id} {...x} />)}
                    {pets.length === 0 && (
                    <h1>No pet accounts for now</h1>
                )} */}
            </div>
        </>
    )
}