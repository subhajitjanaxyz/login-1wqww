import { createSlice } from "@reduxjs/toolkit";
const initialState=false;
export const authorizationx=createSlice({
    name:"login",
    initialState,
    reducers:{
        changestate:(state)=>{
           return !state

        }

    }
})
export const {changestate}= authorizationx.actions;
export default authorizationx.reducer