import { createSlice } from "@reduxjs/toolkit";

const asideSlce = createSlice({
    name: "aside",
    initialState: {
        status: false
    },
    reducers: {
        open: (state) => {state.status = true},
        close: (state) => {state.status = false},
    }
})

export default asideSlce.reducer
export const {open, close} = asideSlce.actions