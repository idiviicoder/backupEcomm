import axios from 'axios'
const instance = axios.create({
    baseURL: "https://fakestoreapi.in/"
})

export default instance;