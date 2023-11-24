import axios from "axios";

const baseURL = 'http://localhost:3001/api';

const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

protectedInstance.interceptors.request.use(
    config => {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const authToken = JSON.parse(loggedInUser).token;
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    }
);

export default {
    authInstance,
    protectedInstance,
};