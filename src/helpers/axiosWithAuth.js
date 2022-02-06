import axios from 'axios'

const baseURL = 'https://african-marketplace3.herokuapp.com/'

export const axiosWithAuth = () => {
    return axios.create({baseURL: baseURL, headers: {authorization: localStorage.getItem('token')}})
}