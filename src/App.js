import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
  const [routine, setRoutine] = useState([])
  const [token, setToken] = useState('')  
  
  return(
    <>
    <h1>Fitness Track</h1>

    {token? <div>logged in</div> : <div>not logged in</div>}
      <Navbar token={token}/>
      {/* {token ? <button type="button" onClick={logout}>Logout</button> : null} */}
      <Routes>
        <Route path="/" element={<Routines/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="Routines" element={<Routines token={token}/>}></Route>
        <Route path="MyRoutines" element={<MyRoutines/>}></Route>
        <Route path="Loading" element={<Loading/>}></Route>
        <Route path="Activities" element={<Activities/>}></Route>
        <Route path="Register" element={<Register setToken={setToken}/>}></Route>
        <Route path="Login" element={<Login setToken={setToken}/>}></Route>

      </Routes>
    
     <Footer/>
  </>
)}


// const root = ReactDOM.createRoot(document.getElementById("app"))
// root.render(<BrowserRouter><App/></BrowserRouter>)