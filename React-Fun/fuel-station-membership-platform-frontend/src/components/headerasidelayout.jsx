import { Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../slices/asideslice";
import { useEffect } from "react";

function Layout(){
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.currentUser?.username)
    const asideStatus = useSelector((state) => state.aside?.status)

    // let asideElement = document.getElementById("aside")

    // useEffect(() => {
    //     asideStatus === "hidden" ? asideElement.style.display = "none" : asideElement.style.display = "block"
    // }, [asideElement])
    

    function asideHandler(){
        asideStatus === "hidden" ? dispatch(open()) : dispatch(close())
    }
    
    return(
        <div>
            <header className="h-12 border-1 border-gray-400 py-2 px-4">
                <div className="flex justify-between items-center">
                    <FontAwesomeIcon icon={faBars} className="hover:cursor-pointer md:hidden" onClick={asideHandler}/>
                    <div className="flex gap-2 items-center">
                        <p>{`Welcome, ${currentUser}`}</p>
                        <FontAwesomeIcon icon={faUser} className="p-2 rounded-full bg-gray-200 hover:cursor-pointer hover:bg-white" />
                    </div>
                </div>
            </header>
            <aside className={`md:visible ${asideStatus === "hidden" ? "hidden" : "block"} `}>
                <p>this is an aside</p>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout