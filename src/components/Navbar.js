import {Link} from "react-router-dom"
// import { useState } from "react"

export default function Navbar({token}){
    // const[ name, setName] = useState("")

    return(
        <>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Routines
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">All Routines</a></li>
              <li><a class="dropdown-item" href="#">My Routines</a></li>
            </ul>
          </div>
            <Link to="Routines">Posts</Link>
            <Link to="Login">Login</Link>
            {/* { token? <Link to={`Profile/${name}`}>Profile</Link> : null} */}

        </>

    )
}
