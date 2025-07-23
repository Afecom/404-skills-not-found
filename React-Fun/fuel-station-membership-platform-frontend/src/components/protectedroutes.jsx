import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function ProtectedRoutes({children}){
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.auth.currentUser)

    useEffect(() => {
        if (!isLoggedIn){
            navigate("/", {replace: true})
        }
    }, [isLoggedIn, navigate])
    
    return children
}
export default ProtectedRoutes