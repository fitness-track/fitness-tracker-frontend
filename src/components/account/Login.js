import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import './Login.css';

export function Login({setToken, token, username, setUsername}) {
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
          username: username,
          password: password
        })
      });
      let result = await response.json()
      setToken(result.token)
      setUsername(result.user.username)
      localStorage.setItem("token", result.token)
      localStorage.setItem("username", result.user.username)

      console.log(token)
      console.log(username)
      //If we choose to take this route for setVerifiedUser
      // setVerifiedUser(userName)
      navigate(`/MyRoutines/${username}`)
    }catch(error){
      console.log("There was an error logging in", error)
    }


  }

  return (
    <>
    <form action="action_page.php" className="loginForm" onSubmit={(event) => loginUser(event)}>
      <div className="container">
      <input type="text" className="username" onChange={(event)=>setUsername (event.target.value)} placeholder="Username" required></input>
     <br></br>
      <input type="password" className="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password" required></input>
      <br></br>
      <button className="submit" type="submit">Login</button>
      <br></br>
     <Link className="link" to="../Register">Not Registered? Click Here!</Link>
      </div>
    </form>
     </>
  )
}
