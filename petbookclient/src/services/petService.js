import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/pets';

export const taskServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const getAll = async() => {
        const result = await request.get(baseUrl);
        const tasks = Object.values(result);
        return tasks;
    };
    
    const create = async(taskData) => {
        const result = await request.post(baseUrl, taskData)
        return result;
    };

    return {
        getAll,
        create
    }
}