import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import { authServiceFactory } from "../../../services/authService";
import { useService } from "../../../hooks/useService";

export const AddPhoto = () => {

    const authService = useService(authServiceFactory);
    const [image, setImage] = useState();
    const { values, changeHandler, onSubmit } = useForm({
        imageUrl:''
    } )

    const onProfilePicSubmit = async(data) => {
        const result = await authService.addPhoto(data)
        setImage(result)
        console.log(result)
    }

    return(
        <>
        <section id = "login-page" className='auth'>
            <form className='photo-form' method="POST" onSubmit={on} style={{width:"40%", margin:"80px auto" }}>
                <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Add your photo</h1>
                <label htmlFor="image">Image</label>
                <input type="imageUrl" alt="UserProfile" id="imageUrl" name="imageUrl" placeholder="Image..." className='parameters' value={values.imageUrl} onChange={changeHandler} />
                <button type="submit" className="addProfilePic">Add Your Photo</button>
            </form>
            </section> 
        </>
    )
}