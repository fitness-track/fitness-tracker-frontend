import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import logo from "../../assets/login.jpg"
import './Login.css';

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
      <div className="container login-frame">
        <div class="row align-items-center">
          <div className="col text-end m-5">
            <img className="login-logo" src={logo} alt="FitnessTrackr logo"/>
          </div>
          <div className="col card login-form">
            <form action="action_page.php" className="loginForm" onSubmit={(event) => loginUser(event)}>
              <div className="container">
                <input type="text" className="username" onChange={(event)=>setUsername (event.target.value)} placeholder="Username" required></input>
                <br></br>
                <input type="password" className="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password" required></input>
                <br></br>
                <button className="btn btn-secondary" type="submit">Login</button>
                <br></br>
              </div>
            </form>
          </div>
        </div>
        <div className="container registration-link text-center">
          <Link to="../Register">Not Registered? <span className="second-word">Click Here!</span></Link>
        </div>
      </div>
    </>
  )
}
