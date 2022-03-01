import axios from 'axios'

const url = 'http://localhost:8000'

export const getFetchUsers = async () => {
    return await axios.get(url);
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`,user);
}

export const updateUser = async (id,user) => {
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`)
}