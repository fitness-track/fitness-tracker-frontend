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


function App() {
  const [routine, setRoutine] = useState([])
  const [token,setToken]=useState('')  
  

  // useEffect(()=>{
  //   const savedToken = localStorage.getItem('token')
  //   console.log(savedToken)
  //   if(savedToken){
  //     setToken(savedToken)
  //   }
  // },[])
  
//   useState(()=>{
//     const getRoutines = async () => {
//         const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/routines');
//         setRoutine(response);
//     }
//     getRoutines;
// }, [])
  
  return(
    <>
    <h1>Fitness Track</h1>
    {
    Routines.map(routine => <div key={routine.name}>
      <div>{routine.name}</div>
      <div>{routine.body}</div>
      {/* <button type='button' className='button' onClick={() => setPostId(post.id)}>Edit</button> */}
    </div>)
    }
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
        <Route path="Register" element={<Register/>}></Route>
        <Route path="Login" element={<Login setToken={setToken}/>}></Route>

      </Routes>
    
     <Footer/>
  </>
)}


const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<BrowserRouter><App/></BrowserRouter>)