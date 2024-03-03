import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/pets';

export const petServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const getAll = async() => {
        const result = await request.get(baseUrl);
        const pets = Object.values(result);
        return pets;
    };

    const addPet = async(data) => {
        const result = await request.post(baseUrl, data);
        return result
    };

    const getOne = async(petId) => {
        console.log(petId)
        const result = await request.get(`${baseUrl}/${petId}`);
        return result;
    }
    
    return {
        getAll, 
        addPet,
        getOne
    }
}