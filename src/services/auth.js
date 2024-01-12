import authInstance from "./instance"

const signup = async(user)=>{
    try{
        const res = authInstance.post('/user/signup',user)
        
        if((await res).status===201){
            console.log(`User ${user.name} registered successfully!!`)
            
        }
    }
    catch(err){
        console.log("Registration Failed",err)
    }
}

const signin =async(user) =>{
    const res = authInstance.post('/user/signin',user)
    if((await res).data){
        console.log(`User ${user} Logged in Successfully!!`)
        sessionStorage.setItem('loggedInUser',JSON.stringify(res.data))
        return res.data
    }

}
export default {signup,signin}