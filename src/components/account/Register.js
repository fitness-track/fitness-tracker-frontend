import {useState} from "react"
import {useNavigate} from "react-router-dom"

export function Register({setToken, setFooterMessage}) {
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [verifiedUser, setVerifiedUser]= useState('')
  const navigate = useNavigate()

  async function registerUser(event){
    event.preventDefault()
    setFooterMessage("")
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
      
      if(result.token){
        setFooterMessage("Success-Register")
        setToken(result.token)
        localStorage.setItem("token", result.token)
        navigate(`/MyRoutines/${username}`)
      }

      if(result.name=="UserExistsError"){
        setFooterMessage("Error-Register-User")
      }

      if(result.name=="PasswordLengthError"){
        setFooterMessage("Error-Register-Password")
      }


      //Again....if we choose to take this route for setVerifiedUser to use in a possible ternary function later
      // setVerifiedUser(username)
      //Do we want to navigate away from this page once they have registered? Perhaps to their profile or the main page.
    }catch(error){
      setFooterMessage("Error-Register-Other")
      console.log("There was an error during registration", error)
    }


  }

  return ( 
    <form onSubmit={(event) => registerUser(event)}>
      <input type="text" value={username} onChange={(event)=>setUsername (event.target.value)} placeholder="Username"></input>
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
      <button type="submit">Register</button>
    </form>
  )
}