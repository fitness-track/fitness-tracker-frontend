import {Link} from "react-router-dom"
import "./Navbar.css"
// import { useState } from "react"

export default function Navbar({token, setToken, userName, setUserName}){
    // const[ name, setName] = useState("")

    function logout(){
        localStorage.removeItem("token")
        setToken("")
        setUserName("")
    }

    return(
        <>

        <div className="navbar">
            <Link to="Routines" className="routine"><i className="routine"></i>ROUTINES</Link>
            <Link to="Activities" className="activity"><i className="activity"></i>ACTIVITIES</Link>           
            {
                token?
                    <>
                        <Link to={"MyRoutines/" + userName}>MY ROUTINES</Link>
                        <a href="/" onClick={logout}>LOGOUT {userName}</a>
            </>
                : <Link to="Login" className="login">LOGIN / REGISTER</Link> 
            }
        </div>
        </>
    )
}