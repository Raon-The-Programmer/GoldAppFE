import axios from "axios"

const baseURL = 'http://localhost:3001'


const authInstance = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        'Content-Type':'application/json'
    }
})

export default authInstance