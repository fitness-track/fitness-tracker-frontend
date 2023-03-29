export async function getActivities(){
  const APIURL = "http://fitnesstrac-kr.herokuapp.com/api/activities"
  try {
    const response = await fetch(APIURL)
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}

export async function getRoutines(){
  const APIURL = "https://fitnesstrac-kr.herokuapp.com/api/routines"
  try {
    const response = await fetch(APIURL)
    const results = await response.json();
    return results;
  } catch(error) {
    console.error (error);
  }
}
