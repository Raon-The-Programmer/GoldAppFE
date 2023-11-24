import instance from "./instance";

const signup = async (user) => {
    try {
        console.log('Registering user...');
        const response = await instance.authInstance.post('/users/signup', user);

        if(response.data) {
            console.log('User registered successfully!');
            console.log(response.data);
        }
    } catch(err) {
        console.log('Error while registering user!', err);   
    }
}

const signin = async (user) => {
    try {
        console.log('Signing in user...');
        const response = await instance.authInstance.post('/users/signin', user);

        if(response.data) {
            console.log('User signed in successfully!');
            console.log(response.data);
            sessionStorage.setItem('loggedInUser', JSON.stringify(response.data));
            return response.data;
        }

        return null;
    } catch (error) {
        console.error('Error while signing in!', error);
        return null;
    }
}

export default {
    signup,
    signin,
};