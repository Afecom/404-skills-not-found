import { createSlice } from "@reduxjs/toolkit";

const asideSlce = createSlice({
    name: "aside",
    initialState: {
        status: "hidden"
    },
    reducers: {
        open: (state) => {state.status = "visible"},
        close: (state) => {state.status = "hidden"},
    }
})

export default asideSlce.reducer
export const {open, close} = asideSlce.actions