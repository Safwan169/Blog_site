import { apiSlice } from "./baseApi";

export const authApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        googleLogIn:Query=>({
            url:"/userManagement/googleAuth",
            method:"GET",
            withCredentials:'include'
        })
    })
})


export const {useGoogleLogInQuery}=authApi