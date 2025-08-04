import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profileView",
    initialState: {
        isOpen: false,
    },
   reducers: {
        openProfile: (state) => {state.isOpen = true},
        closeProfile: (state) => {state.isOpen = false},
   }
})

export default profileSlice.reducer
export const {openProfile, closeProfile} = profileSlice.actions