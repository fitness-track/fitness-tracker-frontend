import {useState} from "react"
import {useNavigate} from "react-router-dom"

export function Login({setToken}) {
  const [userName, setUserName]= useState('')
  const [password, setPassword]= useState('')
  const [verifiedUser, setVerifiedUser]= useState('')
  const navigate = useNavigate()

  async function loginUser(event){
    event.preventDefault()
    try{
      const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/users/login',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: userName,
          password: password
        })
      });
      let result = await response.json()
      setToken(result.token)
      localStorage.setItem("token", result.token)
      //If we choose to take this route for setVerifiedUser
      setVerifiedUser(userName)
      navigate("/MyRoutines")
    }catch(error){
      console.log("There was an error logging in", error)
    }


  }

  return (
    <form onSubmit={(event) => loginUser(event)}>
      <input type="text" value={userName} onChange={(event)=>setUserName (event.target.value)} placeholder="Username"></input>
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
  )
}
