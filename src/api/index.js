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
    const bearer = "Bearer " + token
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

export async function getUsernameRoutines(username, token){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/users/"
  
  try {

    const bearer = "Bearer " + token
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
    const bearer = "Bearer " + token
    const response = await fetch(APIURL, {
      method: "POST",
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

export async function patchActivityByIdAPI(token, activityId, activityName, activityDescription){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities/"
  
  try {
    const bearer = "Bearer " + token
    const response = await fetch(APIURL + activityId, {
      method: "PATCH",
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

export async function getRoutinesWithActivityIdAPI(activityId){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities/"
  
  try {
    const response = await fetch(APIURL + activityId + "/routines", {
      headers: {
        'Content-Type': 'application/json',
      },
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

export async function postRoutineAPI(token, routineName, goal, isPublic){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/routines/"

  try {
    const bearer = "Bearer " + token
    const response = await fetch(APIURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        routineName: routineName,
        goal: goal,
        isPublic: isPublic
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

export async function patchRoutineByIdAPI(token, routineId, routineName, goal, isPublic){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/routines/"
  
  try {
    const bearer = "Bearer " + token
    const response = await fetch(APIURL + routineId, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        routineName: routineName,
        goal: goal,
        isPublic: isPublic
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

export async function deleteRoutineById(token, routineId){
  const bearer = "Bearer " + token
  const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/routines/"
  try {
    const response = await fetch(APIURL + routineId, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
    });
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}

export async function postActivityToRoutineAPI(token, routineId, activityId, count, duration){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/routines/"

  try {
    const bearer = "Bearer " + token
    const response = await fetch(APIURL + routineId | "/activities", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        activityId: activityId,
        count: count, 
        duration: duration
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

export async function patchRoutineActivityByIdAPI(token, routineActivityId, count, duration){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/routine_activities/"
  
  try {
    const bearer = "Bearer " + token
    const response = await fetch(APIURL + routineActivityId, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify({
        count: count, 
        duration: duration
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

export async function deleteRoutineActivityById(token, routineActivityId){
  const bearer = "Bearer " + token
  const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/routines_activities/"
  try {
    const response = await fetch(APIURL + routineActivityId, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
    });
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}