import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext";

export const AddPhoto = () => {

    return(
        <>
        <section id = "login-page" className='auth'>
            <form className='photo-form' method="POST" style={{width:"40%", margin:"80px auto" }}>
                <h1 style={{textAlign:"center", fontFamily:"sans-serif"}}>Add your photo</h1>
                <label htmlFor="image">Image</label>
                <input type="imageUrl" alt="UserProfile" id="imageUrl" name="imageUrl" placeholder="Image..." className='parameters' />
                <button type="submit" className="addProfilePic">Add Your Photo</button>
            </form>
            </section> 
        </>
    )
}