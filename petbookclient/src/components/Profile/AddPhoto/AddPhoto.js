import { useForm } from "../../../hooks/useForm";


export const AddPhoto = ({
    onProilePicSubmit 
}) => {

        const { values, changeHandler } = useForm({
        imageUrl:''
    })

        return(
        <>
        <section id = "login-page" className='auth'>
            <form className='photo-form' method="POST" onSubmit={onProilePicSubmit } style={{width:"40%", margin:"80px auto" }}>
                <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Add your photo</h1>
                <label htmlFor="image">Image</label>
                <input type="imageUrl" alt="UserProfile" id="imageUrl" name="imageUrl" placeholder="Image..." className='parameters' values={values.imageUrl} onChange={changeHandler} />
                <button type="submit" className="addProfilePic">Add Your Photo</button>
            </form>
            </section> 
        </>
    )
}