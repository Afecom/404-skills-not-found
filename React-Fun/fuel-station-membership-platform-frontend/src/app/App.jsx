import Login from "../components/login/login.jsx"
import Dashboard from "../components/dashboard"
import { Routes, Route } from "react-router"
import Layout from "../components/headerasidelayout"
import ProtectedRoute from "../components/protectedroutes.jsx"

function App(){
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            }>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
export default App