import { useState } from "react";
import { useParams } from "react-router-dom"
import {patchRoutineActivityByIdAPI, deleteRoutineActivityById} from "../api"


export default function EditRoutineActivity({token, setFooterMessage}) {

  const {routineActivityId, activityDuration, activityCount} = useParams();
  const[duration, setDuration] = useState('');
  const[count, setCount] = useState('');

  async function editRoutineActivity(event){
    event.preventDefault()
    setFooterMessage('')
    console.log(routineActivityId,duration, count)
    const results = await patchRoutineActivityByIdAPI(token, routineActivityId, count, duration)
    console.log(results)
    if (results.id){
      setFooterMessage("Succes-Edited-Routine-Activity")
    }
  }

  return(
    <>
    <div>
    <h3>Edit Routine Activity</h3>
    <form className='form' onSubmit={editRoutineActivity}>
      <input className="formField" type="text" value={duration} onChange={(event)=>setDuration(event.target.value)} placeholder={activityDuration}></input>
      <input className="formField" type="text" value={count} onChange={(event)=>setCount(event.target.value)} placeholder={activityCount}></input>
      <button id='submitButton' type="submit">Edit Routine Activity</button>
    </form>
    <button onClick={() => {
      deleteRoutineActivityById(token,routineActivityId);
      console.log("RoutineActivity", routineActivityId, "deleted")
    }}>
      Delete Routine Activity
    </button>
    </div>    
    </>
  )
} 