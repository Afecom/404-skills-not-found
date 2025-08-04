import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authslice.js"
import asideReducer from "../slices/asideslice.js"
import profileSliceReducer from "../slices/profileslice.js"
export const store = configureStore({
    reducer:{
        auth: authReducer,
        aside: asideReducer,
        profile: profileSliceReducer,
    }
})