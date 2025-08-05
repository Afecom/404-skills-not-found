import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { close } from "../slices/asideslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AsideNav(props){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === props.navigate;

    function clickHandler(){
        navigate(props.navigate)
        dispatch(close())
    }
    return(
        <div className={`py-2 px-4 flex items-center gap-4 md:gap-2 rounded-md mt-4 transition-colors
                    ${isActive ? 'bg-blue-300 text-blue-950 font-bold' : 'bg-transparent'}
                    hover:bg-blue-100 w-full`} onClick={clickHandler}>
            <FontAwesomeIcon className="text-blue-950" icon={props.icon}/>
            <p className="text-blue-950">{props.button}</p>
        </div>
    )
}
export default AsideNav