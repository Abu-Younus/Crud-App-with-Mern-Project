import * as api from '../Helper/api'

export const getUsers = () => async (dispatch) => {
    try {
       const {data} = await api.getFetchUsers();
       dispatch({type:'FETCH_ALL', payload : data}) 
    } catch (error) {
        console.log(error.message);
    }
}

export const saveUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.addUser(user);
        dispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const editUser = (id,user) => async (dispatch) => {
    try {
        const {data} = await api.updateUser(id,user);
        dispatch({type:'UPDATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUserById = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteUser(id);
        dispatch({type:'DELETE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}