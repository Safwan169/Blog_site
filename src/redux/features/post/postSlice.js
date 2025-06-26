const { createSlice } = require("@reduxjs/toolkit");

const initialState=
    {searchText:'',

      filterText:"All"  
    }

const postSlice=createSlice({
    name:"post",
      initialState,
      reducers:{

        updateFilteText:(state,action)=>{state.filterText=action.payload},
        updateSearchText:(state,action)=>{state.searchText=action.payload}

      }
})

export default postSlice.reducer;
export const {updateFilteText,updateSearchText}=postSlice.actions;
