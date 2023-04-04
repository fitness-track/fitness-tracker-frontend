import {Link} from "react-router-dom"
import "./Navbar.css"
// import { useState } from "react"

export default function Navbar({token}){
    // const[ name, setName] = useState("")

    return(
        <>

        <div class="navbar">
            <Link to="Routines" class="routine"><i class="routine"></i>ROUTINES</Link>
            <Link to="Activities" class="activity"><i class="activity"></i>ACTIVITIES</Link>           
            <Link to="MyRoutines">
                <i class="bi-person-circle"></i>
            </Link>
        </div>
        </>
    )
}