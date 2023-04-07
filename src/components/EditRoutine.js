import { useParams } from "react-router-dom"

export default function EditRoutine({token}) {
  const {routineId, routineName, routineGoal} = useParams();
  return(
    <div>
      <div>{routineId}</div>
      <div>{routineName}</div>
      <div>{routineGoal}</div>
    </div>
  )
}

//TODO
//1 - UseEffect to getActivitiesAPI
//2 - Build form to map activities to dropdown list.