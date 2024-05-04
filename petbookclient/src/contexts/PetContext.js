import { useNavigate } from "react-router-dom";
import { petServiceFactory } from "../services/petService";
import { useLocalStorage } from "../hooks/useLocalStorage";





export const PetProvider = ({
    auth,
    children
}) => {
    const petService = petServiceFactory(auth.accessToken);
    const [pets, setPets] = useLocalStorage('auth', []);
    const navigate = useNavigate()

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

const contextValues = {
    onAddPetSubmit,
    onPetEditSubmit
}

return (
    <PetProvider value={contextValues}>
        {children}
    </PetProvider>
)

}