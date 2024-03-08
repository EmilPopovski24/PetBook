import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PetItem } from "../Catalog/PetItem/PetItem";


export const Profile = ({
    pets
}) => {

    const user = useContext(AuthContext)

    return(
        <>
        <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.userEmail}</li>
            </ul>
        <h3>My pets</h3>
        {pets.map(x=> <PetItem key={x._ownerId} {...x} />)}
            {pets.length === 0 && (
                <h1>No pet accounts for now</h1>
            )}

        </>
    )
}