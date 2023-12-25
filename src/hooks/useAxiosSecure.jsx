import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";

const axiosSecure = axios.create({
    
    baseURL:'http://localhost:5000/',
    // withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },error=>{
            console.log("axios error",error.response)
            if(error.response.status===401||error.response.status===403){
                logOut()
                .then(res=>{
                    navigate('/')
                })
                .catch(err=>console.log(err.massage))

            }
        })
    },[navigate, logOut])

    return axiosSecure
};

export default useAxiosSecure;