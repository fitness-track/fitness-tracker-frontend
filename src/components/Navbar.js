import {Link} from "react-router-dom"
// import { useState } from "react"

export default function Navbar({token}){
    // const[ name, setName] = useState("")

    return(
        <>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
            <Link to="Routines">Routines</Link>
            <Link to="Activities">Activities</Link>
            <Link to="Login">Login</Link>
            {/* { token? <Link to={`Profile/${name}`}>Profile</Link> : null} */}

        </>

    )
}
