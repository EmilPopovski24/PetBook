import { useEffect, useService } from "react";
import { petServiceFactory } from "../../services/petService";


export const PetAccount = ({
    taskId,
    name,
    type,
    breed,
    age, 
    color
}) => {

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