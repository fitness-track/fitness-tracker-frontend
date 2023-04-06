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
    <div className="header">Fitness Track</div>

        <div className="navbar">
            <Link to="Routines" className="routine">ROUTINES</Link>
            <Link to="Activities" className="activity">ACTIVITIES</Link>           
            {
                token?
                    <>
                        <Link to={"MyRoutines/" + userName} className="myRoutines">MY ROUTINES</Link>
                        <a href="/" onClick={logout} className="logout">LOGOUT {userName}</a>

            </>
                : <Link to="Login" className="login">LOGIN / REGISTER</Link> 
            }
        </div>
        </>
    )
}