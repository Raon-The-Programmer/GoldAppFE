import {authInstance} from "./instance";

const signup = async (user) => {
    try {
        const res = await authInstance.post('/user/signup', user);
        console.log(res)
        if (res.status === 201) {
            console.log(`User registered successfully!!`);
        }
    } catch (err) {
        console.log("Registration Failed", err);
    }
};

const signin = async (user) => {
    try {
        
        const res = await authInstance.post('/user/signin', user);
        if (res.data) {
            console.log(`User ${res.data.name} Logged in Successfully!!`);

            
            sessionStorage.setItem('loggedInUser', JSON.stringify(res.data));
            return res.data;
        }
        return null
    } catch (err) {
        console.log("Signin Failed", err);
        return null
    }
};
const forgotpassword = async({email})=>{
   try{
    const res = await authInstance.post('/user/forgotpassword',{email})
    console.log(res)
   }
   catch(err){
    console.log({Error:err})
   }
};
const resetPassword = async ({ userId, token, newPassword }) => {
    try {
        const res = await authInstance.post(`user/resetpassword/${userId}/${token}`, {
            userId,
            token,
            newPassword,
          });
          
      console.log(res);
    } catch (err) {
      console.log({ Error: err });
      throw err; // Re-throw the error to handle it in the component
    }
  };

export default  {
    signup,
    signin,
    forgotpassword,
    resetPassword
};
