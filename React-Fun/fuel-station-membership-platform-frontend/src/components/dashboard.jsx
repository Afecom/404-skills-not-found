import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons"

function Dashboard(){
    const role = useSelector((state) => state.auth.currentUser?.role)
    return(
        <div className="h-full px-4">
            {role === "admin" && (<div>
                <div className="flex flex-between mt-8">
                    <h1 className="font-bold text-4xl">Admin Dashboard</h1>
                    <div className="flex gap-2 items-center rounded-full py-1 px-4 bg-blue-950 text-white h-10">
                        <FontAwesomeIcon icon={faShieldHalved}/>
                        <p className="text-xl">Administrator</p>
                    </div>
                </div>
                <p className="text-xl mt-3">Full system access - Manage all system operations.</p>
                <div className="flex items-center gap-3 rounded-xl py-2 px-4 border-1 border-blue-950 bg-blue-100/50 mt-6">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-blue-800 text-2xl"/>
                    <div>
                        <h3 className="text-blue-950 font-bold text-2xl">Administrator Access</h3>
                        <p className="text-blue-800 mt-1">You have full system privileges including delete operation, 
                            member management and staff administration</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Dashboard