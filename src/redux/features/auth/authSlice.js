const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name:"auth",
    initialState:{userData:{}},
    reducers:{

        setUserData:(state,action)=>{
            state.userData = action.payload
        }
    }
})