import { useNavigate } from "react-router-dom";
import { petServiceFactory } from "../services/petService";
import { createContext, useContext, useEffect, useState } from "react";

export const PetContext = createContext();

export const PetProvider = ({
    children
}) => {

    const petService = petServiceFactory();
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        petService.getAll()
          .then(result=> {
            setPets(result)
        })
      }, []);

    const onAddPetSubmit = async(petData) => {
        const newPet = await petService.addPet(petData);
        setPets(state => [...state, newPet]);
        navigate('/catalog')
};

    const onPetEditSubmit = async(values) => {
        const result = await petService.edit(values._id, values);
        setPets(state => state.map(x => x._id === values._id ? result : x)) // to check this
        navigate(`/catalog/${values._id}`);
};

const onDelete = (res) => { 
    setPets(state => state.map(x=> x._id !== res._id))
};

const contextValues = {
    onAddPetSubmit,
    onPetEditSubmit,
    onDelete,
    pets
}

return (
    <PetContext.Provider value={contextValues}>
        {children}
    </PetContext.Provider>
)

}

export const usePetContext = () => {
    const context = useContext(PetContext);
    return context
}