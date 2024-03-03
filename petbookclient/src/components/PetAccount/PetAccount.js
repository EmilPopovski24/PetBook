import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useParams } from "react-router-dom";
import { useState } from "react";



export const PetAccount = () => {
    const { taskId } = useParams({});//learn more about useParams
    const petService = useService(petServiceFactory);
    const [task, setTask] = useState({});
    
   
    return(
        <>
        <h1>PetAccount</h1>
        <h1>{values.name}, {values.type}, {values.breed}, {values.age}, {values.color}</h1>

        </>
    )
}