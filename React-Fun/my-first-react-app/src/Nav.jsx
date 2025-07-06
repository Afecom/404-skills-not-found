import { NavLink } from "react-router-dom"

export const Nav = () => {
    const linkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    return(
        <nav style={{padding: "0.5rem 1rem", backgroundColor: "aqua"}}>
            <NavLink to={'/'} style={linkStyle}>Home</NavLink>
            <NavLink to={'./about'} style={linkStyle}>About</NavLink>
        </nav>
    )
}