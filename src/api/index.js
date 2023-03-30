import { useParams } from "react-router";

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