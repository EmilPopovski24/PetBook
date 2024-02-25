import * as request from './requester';

const baseUrl = 'http://localhost:3000/'

export const login = (loginData) => {
    const res = request.post(`${baseUrl}/users/login`)
    return res
}