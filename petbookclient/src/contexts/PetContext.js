import { useNavigate } from "react-router-dom";
import { petServiceFactory } from "../services/petService";
import { createContext, useContext, useEffect, useState } from "react";

export const PetContext = createContext();

export const PetProvider = ({
    children
}) => {

    const petService = petServiceFactory();
    const [pets, setPets] = useState([]);
    const [likes, setLikes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(pets.length > 0) {
            petService.getAll()
          .then(result=> {
            setPets(result)
        })
        }  
      },[]); 

    const onAddPetSubmit = async(petData) => {
        const newPet = await petService.addPet(petData);
        setPets(state => [...state, newPet]);
        navigate('/catalog')
};

    const onPetEditSubmit = async(values) => {
        const result = await petService.edit(values._id, values);
        setPets(state => state.map(x => x._id === values._id ? result : x)) 
        navigate(`/catalog/${values._id}`);
};

    const getPet = (petId) => {
        return pets.find(pet=> pet._id === petId)
};

    const deletePet = (petId) => {
        setPets(state => state.filter(pet => pet._id !== petId))
};

    const onLikeSubmit = (petId) => {
        const newLike = await petService.likePet(petId)
        setLikes(state => ...state, newLike)
    }

    const contextValues = {
    onAddPetSubmit,
    onPetEditSubmit,
    getPet,
    deletePet,
    pets
};

return (
    <PetContext.Provider value={contextValues}>
        {children}
    </PetContext.Provider>
    )
};

export const usePetContext = () => {
    const context = useContext(PetContext);
    return context
};