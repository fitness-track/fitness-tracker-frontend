import {Link} from "react-router-dom"
// import { useState } from "react"

export default function Navbar({token}){
    // const[ name, setName] = useState("")

    return(
        <>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
            <Link to="Routines">Posts</Link>
            <Link to="Login">Login</Link>
            { token? <Link to={`Profile/${name}`}>Profile</Link> : null}

        </>

    )
}
