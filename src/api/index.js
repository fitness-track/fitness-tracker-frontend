export async function getUsersMeAPI(token, setIsLoggedIn, setUsername){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/users/me"
  
  try {
    const bearer = "bearer " + token
    const response = await fetch(APIURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
    })
    const results = await response.json();
    if (!results.error){
      setUsername(results.username)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      throw (results.error);
    }
    
} catch(error) {
    console.error (error);
  }
}