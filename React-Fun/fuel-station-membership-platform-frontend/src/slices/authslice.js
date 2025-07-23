import { createSlice, current } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [
            {
                username: 'admin',
                password: 'admin@4231',
                role: 'admin'
            },
            {
                username: 'member',
                password: 'member@4231',
                role: 'member'
            },
        ],
        currentUser: null,
    },
    reducers:{
        login: (state, action) => {
            const {username, password} = action.payload

            const user = state.users.find(
                (user) => user.username === username && user.password === password
            )
            if (user){
                state.currentUser = {
                    username: user.username,
                    role: user.role,
                }
            }
            else{
                alert("invalid credentials")
            }
        },
        logout: (state) => state.currentUser = null
    }
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer