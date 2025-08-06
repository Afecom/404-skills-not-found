import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldHalved, faUser } from "@fortawesome/free-solid-svg-icons"

function Dashboard(){
    const role = useSelector((state) => state.auth.currentUser?.role)
    return(
        <div className="h-full px-4">
            {role === "admin" && (<div>
                <div className="flex mt-8 md:gap-4">
                    <h1 className="font-bold text-4xl md:text-3xl">Admin Dashboard</h1>
                    <div className="flex gap-2 items-center rounded-full py-1 px-4 bg-blue-950 text-white h-10 md:h-8">
                        <FontAwesomeIcon icon={faShieldHalved}/>
                        <p className="text-xl md:text-md">Administrator</p>
                    </div>
                </div>
                <p className="text-xl mt-3">Full system access - Manage all system operations.</p>
                <div className="flex items-center gap-3 rounded-xl py-2 px-4 border-1 border-blue-950 bg-blue-100/50 mt-6">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-blue-800 text-2xl"/>
                    <div>
                        <h3 className="text-blue-950 font-bold text-2xl md:text-xl">Administrator Access</h3>
                        <p className="text-blue-800 mt-1 md:mt-0">You have full system privileges including delete operation, 
                            member management and staff administration</p>
                    </div>
                </div>
            </div>)}
            {role === "member" && (<div>
                <div className="flex mt-8 md:gap-4">
                    <h1 className="font-bold text-4xl md:text-3xl">User Dashboard</h1>
                    <div className="flex gap-2 items-center rounded-full py-1 px-4 bg-blue-950 text-white h-10 md:h-8">
                        <FontAwesomeIcon icon={faShieldHalved}/>
                        <p className="text-xl md:text-md">Member</p>
                    </div>
                </div>
                <p className="text-xl mt-3">Standard system operation - Card and car management, Topup-Card and reports</p>
                <div className="flex items-center gap-3 rounded-xl py-2 px-4 border-1 border-blue-950 bg-blue-100/50 mt-6">
                    <FontAwesomeIcon icon={faUser} className="text-blue-800 text-2xl"/>
                    <div>
                        <h3 className="text-blue-950 font-bold text-2xl md:text-xl">Member Access</h3>
                        <p className="text-blue-800 mt-1 md:mt-0">You can manage Cards and cars, handle top-up operations, 
                            and view reports. Contact admin for advanced operations.</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Dashboard