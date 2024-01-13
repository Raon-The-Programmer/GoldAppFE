import axios from "axios"

const baseURL = 'http://localhost:3001'


const authInstance = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        'Content-Type':'application/json'
    }
})
console.log(authInstance)
const protectedInstance = axios.create({
    baseURL:baseURL,
    timeout:4000,
    headers:{
        'Content-Type':'application/json'
    }
})
protectedInstance.interceptors.request.use(
    config=>{
        
        const loggedInUser = sessionStorage.getItem('loggedInUser')
        //console.log(loggedInUser)
        if(loggedInUser){
        const authToken = JSON.parse(loggedInUser).Token
       // console.log(authToken)
        if(authToken){
        config.headers={
            ...config.headers,
            'Authorization':`Bearer ${authToken}`
        }}
       // console.log('Request config:', config.headers);
    
    }
    return config
    }
    
)

export {authInstance,protectedInstance}