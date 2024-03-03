import { useService } from '../../hooks/useService'
import { petServiceFactory } from "../../services/petService";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const PetAccount = () => {
    const { userId } = useContext(AuthContext);
    const { taskId } = useParams({});//learn more about useParams
    const petService = useService(petServiceFactory);
    const [task, setTask] = useState({});
    
    useEffect(()=> {
        petService.getOne(taskId)
            .then(result => {
                setTask(result)
            }, [taskId])       
    });

    const isOwner = task._ownerId === userId;
   
    return(
        <>
        <h1>PetAccount</h1>
        <h1>{task.name}, {task.type}, {task.breed}, {task.age}, {task.color}</h1>
        {isOwner && (
            <button>
                Edit
            </button>
        )}
        </>
    )
}