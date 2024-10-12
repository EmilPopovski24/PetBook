import { useForm } from "../../../hooks/useForm";
import './AddPhoto.css';

export const AddPhoto = ({
    onProfilePicSubmit 
}) => {

    const { values, changeHandler, onSubmit } = useForm({
        imageUrl:'',
    }, onProfilePicSubmit)

        return(
        <>
        <section id = "add-photo-page" className='auth'>
            <form className='photo-form' method="POST" onSubmit={onSubmit} style={{width:"40%", margin:"80px auto" }}>
                <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Add your photo</h1>
                <label htmlFor="image">Image URL</label>
                <input type="imageUrl" alt="UserProfile" id="imageUrl" name="imageUrl" placeholder="Image..." className='parameters' values={values.imageUrl} onChange={changeHandler} />
                <button type="submit" className="addProfilePic">Add Your Photo</button>
            </form>
        </section> 
        </>
    )
}