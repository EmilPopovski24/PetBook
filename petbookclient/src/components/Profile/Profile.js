

export const Profile = ({
    email,
    username
}) => {
    

    return(
        <>
        <h1>MyProfile</h1>
        <h3>Personal Info</h3> 
            <ul>
                <li>Username: {username}</li>
                <li>Email: {email}</li>

            </ul>
        </>
    )
}