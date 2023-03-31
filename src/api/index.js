import { useParams } from "react-router";

export async function getActivitiesAPI(){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities"
  try {
    const response = await fetch(APIURL)
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}

export async function getRoutinesAPI(){
  const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/routines"
  try {
    const response = await fetch(APIURL)
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}

export async function getUsersMeAPI(token){
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
      return results
    } else {
      throw (results.error);
    }

} catch(error) {
    console.error (error);
  }
}

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

export async function postActivityAPI(token, activityName, activityDescription){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities/"

  try {
    const bearer = "bearer " + token
    const response = await fetch(APIURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        name: activityName,
        description: activityDescription
      })
    });
    const results = await response.json();
    if (!results.error){
      return results;
    } else {
      throw (results.error)
    }

} catch(error) {
    console.error (error);
  }
}

export async function patchActivityByIdAPI(token, activityName, activityDescription){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities/"
  const { activityId } = useParams();
  try {
    const bearer = "bearer " + token
    const response = await fetch(APIURL + activityId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        name: activityName,
        description: activityDescription
      })
    });
    const results = await response.json();
    if (!results.error){
      return results;
    } else {
      throw (results.error)
    }

} catch(error) {
    console.error (error);
  }
}
