import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";

import{
  Activities,
  Footer,
  Loading,
  MyRoutines,
  Navbar,
  Routines,
  Error
} from './components'


import {Login} from './components/account/Login'
import {Register} from './components/account/Register'


export default function App() {
  const [token, setToken] = useState('')
  const [username, setUsername] = useState(localStorage.getItem("username"))
    
  useEffect(()=>{
    let savedToken = localStorage.getItem("token")
    if (savedToken) {
        setToken(savedToken)
    }
},[])

  return(
    <>
    
      <Navbar token={token} setToken={setToken} username={username} setUsername={setUsername}/>
      {/* {token ? <button type="button" onClick={logout}>Logout</button> : null} */}
      <Routes>
        <Route path="/" element={<Routines/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="Routines" element={<Routines token={token}/>}></Route>
        <Route path={"MyRoutines/" + username} element={<MyRoutines token={token} username={username}/>}></Route>
        <Route path="Loading" element={<Loading/>}></Route>
        <Route path="Activities" element={<Activities/>}></Route>
        <Route path="Register" element={<Register setToken={setToken}/>}></Route>
        <Route path="Login" element={<Login token={token} setToken={setToken} username={username} setUsername={setUsername}/>}></Route>

      </Routes>
    
     <Footer/>
  </>
)}
