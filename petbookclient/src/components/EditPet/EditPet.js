import { useForm } from '../../hooks/useForm'; 
import { useService } from '../../hooks/useService';
import { petServiceFactory } from '../../services/petService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 

export const EditPet = ({
    onPetEditSubmit
}) => {

    const { petId } = useParams();
    const petService = useService(petServiceFactory);
    const { values, changeHandler, onSubmit, changeValues} = useForm({
        _id:'',
        title: '',
        description: '',
        date: '',
    }, onPetEditSubmit);

    useEffect(()=> {
        petService.getOne(petId)
            .then(result => {
                changeValues(result);
            })
    },[petId]);
    return(
        <h1>Edit Pet</h1>
    )
}