import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"

export function Login({setToken, token, username, setUsername, setFooterMessage}) {
  const [password, setPassword]= useState('')
  const navigate = useNavigate()

  async function loginUser(event){
    event.preventDefault()
    setFooterMessage("")
    try{
      const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/users/login',{
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

      if (result.name=="IncorrectCredentialsError"){
        setFooterMessage("Error-Login-Credentials")
      }

      if (result.token){
        setFooterMessage("Success-Login")
        setToken(result.token)
        setUsername(result.user.username)
        localStorage.setItem("token", result.token)
        localStorage.setItem("username", result.user.username)
        navigate(`/MyRoutines/${username}`)
      }

      //If we choose to take this route for setVerifiedUser
      // setVerifiedUser(userName)
    }catch(error){
      setFooterMessage("Error-Login-Other")
      console.log("There was an error logging in", error)
    }


  }

  return (
    <>
    <form onSubmit={(event) => loginUser(event)}>
      <input type="text" onChange={(event)=>setUsername (event.target.value)} placeholder="Username"></input>
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
     <Link to="../Register">Not Registered? Click Here!</Link>
     </>
  )
}
