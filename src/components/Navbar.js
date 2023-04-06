import {Link} from "react-router-dom"
import "./Navbar.css"
// import { useState } from "react"

export default function Navbar({token, setToken, username, setUsername}){
    // const[ name, setName] = useState("")

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setToken("")
        setUsername("")
    }

    return(
        <>

        <div className="navbar">
            <Link to="Routines" className="routine"><i className="routine"></i>ROUTINES</Link>
            <Link to="Activities" className="activity"><i className="activity"></i>ACTIVITIES</Link>           
            {
                token?
                    <>
                        <Link to={"MyRoutines/" + username} className="myroutines">MY ROUTINES</Link>
                        <a className="logout" href="/" onClick={logout}>LOGOUT {username}</a>
            </>
                : <Link to="Login" className="login">LOGIN / REGISTER</Link> 
            }
        </div>
        </>
    )
}