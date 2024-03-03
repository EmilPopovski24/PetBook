import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const PetAccount = () => {
    const { userId } = useContext(AuthContext);
    const { taskId } = useParams({});//learn more about useParams
    const [task, setTask] = useState({});
    const petService = useService(petServiceFactory);
    
    useEffect(()=> {
        petService.getOne(taskId)
            .then(result => {
                setTask(result)
            })
    }, [taskId]);

    const isOwner = task._ownerId === userId;
   
    return(
        <>
        <h1>PetAccount</h1>
        <h3>{task.name}</h3>
        <h3>{task.type}</h3>
        <h3>{task.breed}</h3>
        <h3>{task.age}</h3>
        <h3>{task.color}</h3>
        {isOwner && (
            <button>
                Edit
            </button>
        )}
        </>
    )
}