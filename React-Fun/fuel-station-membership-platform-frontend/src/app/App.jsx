import Login from "../components/login/login.jsx"
import Dashboard from "../components/dashboard"
import ProtectedRoutes from "../components/protectedroutes"
import { Routes, Route } from "react-router"
import Layout from "../components/headerasidelayout"

function App(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
                    <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
            </Route>
        </Routes>
        )
}
export default App