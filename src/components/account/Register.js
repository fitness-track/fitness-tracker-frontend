import {useState} from "react"
import {useNavigate} from "react-router-dom"
import logo from "../../assets/register.jpg"
import "./Login"

export function Register({setToken, setFooterMessage}) {
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
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
      
      if(result.token){
        setFooterMessage("Success-Register")
        setToken(result.token)
        localStorage.setItem("token", result.token)
        navigate(`/MyRoutines/${username}`)
      }

      if(result.name==="UserExistsError"){
        setFooterMessage("Error-Register-User")
      }

      if(result.name==="PasswordLengthError"){
        setFooterMessage("Error-Register-Password")
      }

    }catch(error){
      setFooterMessage("Error-Register-Other")
      console.error("There was an error during registration", error)
    }
  }

  return ( 

    <div className="container login-frame">
      <div className="row align-items-center">
        <div className="col text-end m-5">
          <img className="login-logo" src={logo} alt="FitnessTrackr logo"/>
        </div>
      <div className="col card login-form">
      <h1>Register:</h1>
        <form onSubmit={(event) => registerUser(event)}>
          <div className="container">
            <input type="text" className ="username" value={username} onChange={(event)=>setUsername (event.target.value)} placeholder="Username"></input>
            <input type="password" className ="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input>
            <button className ="btn btn-secondary" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
    <div className="container registration-link text-center">
    </div>
  </div>
  )
}