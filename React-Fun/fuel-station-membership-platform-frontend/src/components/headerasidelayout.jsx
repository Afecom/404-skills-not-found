import { faArrowRightFromBracket, faBars, faCircleInfo, faGear, faGears, faInfo, faUser, faUserGraduate, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { close, open } from "../slices/asideslice";
import { openProfile, closeProfile } from "../slices/profileslice";
import { logout } from "../slices/authslice";

function Layout(){
    const dispatch = useDispatch()
    const username = useSelector((state) => state.auth.currentUser?.username)
    const role = useSelector((state) => state.auth.currentUser?.role)
    const isAsideVisible = useSelector((state) => state.aside.status)
    const isProfileVisible = useSelector((state) => state.profile.isOpen)

    function asideHandler(){
        isAsideVisible ? dispatch(close()) : dispatch(open())
    }
    function profileHandler(){
        isProfileVisible ? dispatch(closeProfile()) : dispatch(openProfile())
    }
    return(
        <div className="relative min-h-screen">
            <aside className={`fixed top-0 left-0 ${isAsideVisible ? "w-[60%]" : "w-0 overflow-hidden"} z-20 bg-white h-full md:w-[20%] 
            border-1 border-gray-300 transition-all duration-300 ease-in-out`}>
                <p>this is an aside</p>
            </aside>
            {isAsideVisible && (
                <div 
                    className="absolute top-0 left-0 w-full h-full md:hidden bg-black/40 z-10s"
                    onClick={() => dispatch(close())}
                >
                </div>
            )}
            {isProfileVisible && (
                <div className="rounded-md border-1 border-gray-400 bg-white absolute top-14 right-3 md:w-[15%] flex flex-col gap-2 p-2 w-[45%] z-20 overflow-hidden">
                    <FontAwesomeIcon icon={faX} className="absolute right-3 top-2 rounded-ful hover:cursor-pointer text-blue-950 hover:text-blue-300" onClick={() => dispatch(closeProfile())}/>
                    <div className="flex gap-2 items-center mt-4 md:mt-0">
                        <FontAwesomeIcon icon={faUser} className="p-2 rounded-full bg-blue-950 hover:cursor-pointer text-white"/>
                        <p>{username}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faGear} className="p-2 rounded-full bg-blue-950 hover:cursor-pointer text-white"/>
                        <p>{role}</p>
                    </div> <hr />
                    <div className="flex gap-2 items-center hover:bg-blue-300 rounded-md p-1">
                        <FontAwesomeIcon icon={faCircleInfo} className="p-2 rounded-full bg-blue-950 text-white hover:cursor-pointer"/>
                        <p>Info</p>
                    </div>
                    <div className="flex gap-2 items-center hover:bg-blue-300 rounded-md p-1" onClick={() => dispatch(logout())}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="p-2 rounded-full bg-blue-950 text-white hover:cursor-pointer"/>
                        <p>Logout</p>
                    </div>
                </div>
            )}
            <div>
                <header className="py-2 px-4 border-1 border-gray-300 md:ml-[20%]">
                    <div className="flex justify-between items-center">
                        <FontAwesomeIcon icon={faBars} onClick={asideHandler} className="md:invisible"/>
                        <div className="flex gap-3 items-center">
                            <p>{`welcome, ${username}`}</p>
                            <FontAwesomeIcon icon={faUser} className="p-2 rounded-full bg-gray-300 hover:cursor-pointer hover:bg-white" onClick={profileHandler}/>
                        </div>
                    </div>
                </header>
                <main className="md:ml-[20%]">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
export default Layout