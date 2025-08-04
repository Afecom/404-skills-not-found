import { faGasPump, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { login } from "../../slices/authslice"
import { useNavigate } from "react-router"
import style from "./login.module.scss"

function Login(){
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    function submitHandler(e){
        e.preventDefault()

        const form = e.target
        const username = form.elements.username.value.trim()
        const password = form.elements.password.value.trim()

        dispatch(login({username, password}))

        if (username && password){
            navigate("/dashboard", {replace: true})
        }
    }
        return(
        <main className="h-[100dvh] flex flex-col justify-center items-center">
            <div className="bg-gradient-to-br bg-blue-950 text-white rounded-lg py-8 px-6">
                <div className="text-center">
                    <FontAwesomeIcon icon={faGasPump} className="text-3xl text-blue-300"/>
                    <p className="font-bold font-mono mt-4 text-xl">Fuel Station Manager</p>
                </div>
                <form className="w-full" onSubmit={submitHandler}>
                    <div className="mx-4 my-8 relative">
                        <FontAwesomeIcon icon={faUser} className="absolute p-4 bg-blue-300 rounded-full text-blue-950 text-2xl top-1"/>
                        <input type="text" id="usernameInput" name="username" className="w-full rounded-full border-1 mt-2 border-blue-300 text-white py-3 px-16 focus:outline-1 focus:outline-white placeholder:text-white" placeholder="Username" required/>
                    </div>
                    <div className="mx-4 my-8 relative">
                        <input type="password" id="passwordInput" name="password" className="w-full rounded-full border-1 mt-2 border-blue-300 text-white py-3 px-16 focus:outline-1 focus:outline-white placeholder:text-white" placeholder="Password" required/>
                        <FontAwesomeIcon icon={faLock} className="absolute p-4 bg-blue-300 rounded-full text-blue-950 text-2xl top-1 right-0"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-300 rounded-full py-2 text-xl font-mono text-blue-950 hover:cursor-pointer hover:bg-blue-500">Login</button>
                </form>
            </div>
        </main>
    )
    
}
export default Login