import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {useNavigate, Link} from "react-router-dom"

import { getActivitiesAPI, postActivityToRoutineAPI, postRoutineAPI, patchRoutineByIdAPI, deleteRoutineById} from "../api"


export default function EditRoutine({token}) {
const {routineId, routineName, routineGoal} = useParams();
const[name, setName] = useState('')
const[goal, setGoal] = useState('')
const[count, setCount] = useState('')
const[duration, setDuration] = useState('')
const [activities, setActivities] = useState([])
const [activityId, setActivityId] = useState('')
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate()


const[isPublic, setIsPublic] = useState(false)

useEffect(()=>{
    async function getActivities(){
      setIsLoading(true)
      const response = await getActivitiesAPI()
      console.log(response)
      setActivities(response)
      setIsLoading(false)
    }
    getActivities();
  },[]);
  
async function addActivityToRoutine(event){
  event.preventDefault()
  console.log(routineId, activityId, count, duration)
  const response = await postActivityToRoutineAPI(routineId, activityId, count, duration)
  console.log(response)
  setCount("")
  setDuration("")
}

async function editRoutine(event){
  event.preventDefault()
  console.log(token, name, goal, isPublic)
  const results = await patchRoutineByIdAPI(token, routineId, name, goal, isPublic)
  console.log(results)
  // setGoal("")
  // setName("")
}
  return(
  <>
    <div>
      <div>{routineId}</div>
      <div>{routineName}</div>
      <div>{routineGoal}</div>
    </div>
  

<div>
<h3>Edit Routine</h3>
<form className='form' onSubmit={editRoutine}>
    <input className="formField" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder={routineName}></input>
    <input className="formField" type="text" value={goal} onChange={(event)=>setGoal(event.target.value)} placeholder={routineGoal}></input>
    {/* Is Public?
    <input id='checkbox' type="checkbox" value={isPublic} onChange={()=>setIsPublic(!isPublic)} placeholder="Is this a public routine?"></input> */}
    <button id='submitButton' type="submit">Edit Routine</button>
    <button
                      onClick={() => {
                        // setRoutineId(routine.id);
                        deleteRoutineById(token,routineId);
                        console.log("Routine", routineId, "deleted")
                        navigate(-1)
                      }}
                    >
                      Delete Routine
                </button>
</form>
</div>


<form className='form' onSubmit={addActivityToRoutine}>
    <select onChange={(event)=>setActivityId(event.target.value)}>{activities.map((activity)=>{
    return <option value={activity.id}>{activity.name}</option>;})}</select>
      <input className="formField" type="text" value={count} onChange={(event)=>setCount(event.target.value)} placeholder="Count"></input>
      <input className="formField" type="text" value={duration} onChange={(event)=>setDuration(event.target.value)} placeholder="Duration"></input>
      <button id='submitButton' type="submit">Add Activity</button>
</form>
</>
)
}
//TODO
//1 - UseEffect to getActivitiesAPI
//2 - Build form to map activities to dropdown list.