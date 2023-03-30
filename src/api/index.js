import { useParams } from "react-router";

export async function getUsernameRoutines(token){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/users/"
  const {username} = useParams();
  try {
    const bearer = "bearer " + token
    const response = await fetch(APIURL + username + "/routines", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
    })
    const results = await response.json();
    return results;
    
} catch(error) {
    console.error (error);
  }
}