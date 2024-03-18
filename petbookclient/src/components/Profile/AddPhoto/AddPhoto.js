import { useContext, useState } from "react"
import { useForm } from "../../../hooks/useForm"
import { AuthContext } from "../../../contexts/AuthContext";


export const AddPhoto = () => {

    const [image, setImage] = useState([]);
    const authService = useContext(AuthContext);
    const onProfilePhotoAdd = (data) => {
        const result = authService.addPhoto(data)
        setImage(result)
        console.log(result)
    }

    return(
        <>
        <section id = "login-page" className='auth'>
            <form className='photo-form' method="POST" style={{width:"40%", margin:"80px auto" }}>
                <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Add your phto</h1>
                <label htmlFor="image">Image</label>
                <input type="imageUrl" alt="UserProfile" id="imageUrl" name="imageUrl" v placeholder="Image..." className='parameters' />
                <button type="submit" className="addProfilePic" onClick={onProfilePhotoAdd}>Add Your Photo</button>
            </form>
            </section> 
        </>
    )
}