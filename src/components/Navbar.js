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
        <div className="header-navbar sticky-top">
            <div className="row align-items-center">
                <div className="col-sm">
                    <div className="header"><a href="/"><h1>Fitness<span className="second-word">Trackr</span></h1></a></div>
                </div>
                <div className="col-sm ">
                    <Link to="Routines">ROUTINES</Link>
                </div>
                <div className="col-sm">
                    <Link to="Activities">ACTIVITIES</Link>           
                </div>
                
                {
                token?
                <>
                    <div className="col-sm">
                    <Link to={"MyRoutines/" + username}>MY ROUTINES</Link>                
                    </div>
                    <div className="col-sm">
                    <a href="/" onClick={logout}>LOGOUT {username}</a>
                    </div>
                </>
                :<div className="col-sm">
                    <Link to="Login">LOGIN / REGISTER</Link> 
                </div>
                }
                
            </div>
        </div>
    )
}