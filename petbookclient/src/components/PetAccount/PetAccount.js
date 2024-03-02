import { useEffect } from "react";
import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useParams } from "react-router-dom";


export const PetAccount = ({
    name,
    type,
    breed,
    age, 
    color
}) => {
    const { taskId } = useParams();
    const petService = useService(petServiceFactory)

    useEffect(()=> {
        petService.getOne(taskId)
            
    },[taskId]);
    return(
        <>
        <h1>PetAccount</h1>
        <h1>{name}, {type}, {breed}, {age}, {color}</h1>

        </>
    )
}