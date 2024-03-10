import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import { PetItem } from "../Catalog/PetItem/PetItem";
import { ProfilePet } from "./ProfilePet/ProfilePet";
import { authServiceFactory } from "../../services/authService";


export const Profile = ({
    pets
}) => {

    const user = useContext(AuthContext);
    const authService = useService(authServiceFactory);

    const onAddPhoto = async(photo) => {
        const result = await authService.addPhoto(photo)
        return result;
    }

    return(
        <>
        {/* <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.userEmail}</li>
            </ul>
        <h3>My pets</h3>
        {pets.map(x=> <ProfilePet key={x._ownerId} {...x} />)}
            {pets.length === 0 && (
                <h1>No pet accounts for now</h1>
            )} */}
            <div class="card">   
                <form action="/action_page.php" onSubmit={onAddPhoto}>
                    <p>Add your profile photo</p>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    <input type="submit"/>
                </form>
                <img src="img.jpg" alt="{user.username}" style={{width:"100%"}} />
                <h3>Personal Info</h3> 
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.userEmail}</li>
                    </ul>         
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                {/* <Link to={"/"}><i class="fa fa-dribbble">ui</i></Link>
                <Link to="/"><i class="fa fa-twitter">ui</i></Link>
                <Link to="/"><i class="fa fa-linkedin">ui</i></Link>
                <Link to="/"><i class="fa fa-facebook">ui</i></Link> */}
                <p><button>Contact</button></p>
            </div>
        </>
    )
}