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