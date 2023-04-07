import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./Login"

export function Register({setToken}) {
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [verifiedUser, setVerifiedUser]= useState('')
  const navigate = useNavigate()

  async function registerUser(event){
    event.preventDefault()
    try{
      const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/users/register',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      let result = await response.json()
      console.log(result);
      //should this set as we "should" be getting a token as they are logged in once registered?
      setToken(result.token)
      localStorage.setItem("token", result.token)
      //Again....if we choose to take this route for setVerifiedUser to use in a possible ternary function later
      setVerifiedUser(username)
      //Do we want to navigate away from this page once they have registered? Perhaps to their profile or the main page.
      navigate(`/MyRoutines/${username}`)
    }catch(error){
      console.log("There was an error during registration", error)
    }


  }

  return ( 
    <form onSubmit={(event) => registerUser(event)}>
      <div className="container">
      <input type="text" className ="username" value={username} onChange={(event)=>setUsername (event.target.value)} placeholder="Username"></input>
      <input type="password" className ="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
      <button className ="submit" type="submit">Register</button>
      </div>
    </form>
  )
}