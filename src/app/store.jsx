import { configureStore } from "@reduxjs/toolkit";
import authorizationx from "./dataSlice";
export const store=configureStore({
    reducer:{
     authx:authorizationx

    }
})