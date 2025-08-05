import Login from "../components/login/login.jsx"
import Dashboard from "../components/dashboard"
import Members from "../components/members.jsx"
import Reports from "../components/reports.jsx"
import Staffs from "../components/staffs.jsx"
import TopUp from "../components/topup.jsx"
import { Routes, Route } from "react-router"
import Layout from "../components/headerasidelayout"
import ProtectedRoute from "../components/protectedroutes.jsx"
import { login } from "../slices/authslice.js"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function App(){
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem("token");
        const expiresAt = localStorage.getItem("expiresAt");
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if(token, expiresAt, Date.now() < Number(expiresAt), currentUser){
            dispatch(login({...currentUser, token, skipValidation: true}))
        }
    }, [dispatch])

    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={
                    <ProtectedRoute>
                        <Layout />
                    </ProtectedRoute>
                }>
                <Route index element={<Dashboard />} />
                <Route path="/members" element={<Members />}/>
                <Route path="/reports" element={<Reports />}/>
                <Route path="/staffs" element={<Staffs />}/>
                <Route path="/topup" element={<TopUp />}/>
            </Route>
        </Routes>
    )
}
export default App