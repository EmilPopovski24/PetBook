import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"


export const Profile = () => {

    const user = useContext(AuthContext)

    return(
        <>
        <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.userEmail}</li>

            </ul>
        </>
    )
}