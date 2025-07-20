import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export default counterSlice.reducer
export const {increment, decrement, incrementByValue} = counterSlice.actions