import instance from "./instance";

const getProfile = async (dispatch) => {
    try {
        console.log('Getting profile...');
        const response = await instance.protectedInstance.get('/users/profile');

        if (response.status === 200) {
            console.log('Profile fetched successfully!');
            console.log(response.data);
            await dispatch({ type: 'USER_PROFILE', payload: response.data });
            
            return response.data;
        } else if (response.status === 401) {
            console.log('token expired!');
            return null;
        }

    } catch (error) {
        console.error('Error while getting profile!', error);
        return null;
    }
}

export default {
    getProfile,
};