import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/pets';

export const petServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const getAll = async() => {
        const result = await request.get(baseUrl);
        const pets = Object.values(result);
        return pets;
    };
    

    return {
        getAll
    }
}