import {Link} from "react-router-dom"
// import { useState } from "react"

export default function Navbar({token}){
    // const[ name, setName] = useState("")

    return(
        <>
            <Link to="Routines">Routines</Link>
            <br></br>
            <Link to="Activities">Activities</Link>
            <br></br>
            <Link to="Profile"></Link>
        </>

    )
}
