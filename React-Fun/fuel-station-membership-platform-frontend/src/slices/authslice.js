import { createSlice, current } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: [
            {
                username: 'Administrator',
                password: 'admin@4231',
                role: 'admin'
            },
            {
                username: 'customer',
                password: 'member@4231',
                role: 'member'
            },
        ],
        currentUser: null,
        isLoggedIn: false,
        token: null,
    },
    reducers:{
        login: (state, action) => {
            const {username, password, token, role, skipValidation} = action.payload

            if(skipValidation){
                state.token = token;
                state.isLoggedIn = true;
                state.currentUser = {username, role};
                return;
            }

            const user = state.users.find(
                (user) => user.username === username && user.password === password
            )
            if (user){
                state.currentUser = {
                    username: user.username,
                    role: user.role,
                }
                state.isLoggedIn = true;
            }
            else{
                alert("invalid credentials")
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("expiresAt");
            localStorage.removeItem("currentUser")
        }
    }
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer