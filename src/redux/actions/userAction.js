import { GET_ALL_USER, ADD_NEW_USER, UPDATE_USER, USER_LOGGED_IN } from '../types'
import axios from 'axios'

export const getAllUser = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/getUser`)
            dispatch({
                type: GET_ALL_USER,
                payload: response.data
            })
        }
        catch (error) {
            console.log("error occured: ", error);
        }
    }
}

export const addUser = (newUserData) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://www.localhost:5000/api/addUser`, newUserData)
            dispatch({
                type: ADD_NEW_USER,
                payload: response.data
            });
        }
        catch (error) {
            console.log("error occured: ", error);
        }
    }
}

export const updateUser = (id, updatedData) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/updateUser/${id}`, updatedData)
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        }
        catch (error) {
            console.log("error occured: ", error);
        }
    }
}

export const userLoggedIn = (user) => {
    return { type: USER_LOGGED_IN, user };
}