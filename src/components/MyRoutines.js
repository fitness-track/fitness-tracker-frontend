import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { getRoutinesAPI, getUsernameRoutines, postRoutineAPI, deleteRoutineActivityById, deleteRoutineById, patchRoutineByIdAPI, getActivitiesAPI, postActivityToRoutineAPI} from "../api"
import Loading from "./Loading";
import './Routines.css';
import './MyRoutines.css'

export default function MyRoutines({token, username}) {
  const [routines, setRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")
  const [count,setCount]= useState("")
  const [activities, setActivities] = useState([]);
  const [duration, setDuration]= useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [routineId, setRoutineId]=useState("")
  const [ activityId, setActivityId]= useState("")
  // const {username} = useParams()

  async function postRoutine(event){
    event.preventDefault()
    console.log(token, name, goal, isPublic)
    const results = await postRoutineAPI(token, name, goal, isPublic)
    console.log(results)
    setGoal("")
    setName("")
  }

  useEffect(()=>{
    if(token && username) {async function getUserRoutines(event){      
      setIsLoading(true)
      console.log(token)
      console.log(username)
      const response = await getUsernameRoutines(username, token)
      console.log(response)
      setRoutines(response)
      setIsLoading(false)
    }
    getUserRoutines()};
  },[token,username]);

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

  return(
    isLoading?<Loading/>:
    token?

<section className="container text-center">
  <div className="wrapper">
    <div className="subWrapper">
      <div className="row row-cols-1 row-cols-lg-3">
{
  routines?.map((routine)=>{
    return (
        <div className="col">
          <div className="card routinesCard text-bg-primary" key={"rId" + routine.id}>
            <p>Routine ID: {routine.id}</p>
            <div className="card-body">
              <h3>{routine.name}</h3>
              <h5>{routine.goal}</h5>
          
              
              {
                routine.activities.length>0?<p>This routine has <strong>{routine.activities.length}</strong> activities:</p>:<p>No activities assigned to this routine</p>
              }
              <div className="card activityCard text-bg-secondary mb-3 overflow-auto">
                <div id={"rId" + routine.id} className="accordion">
                {
                routine.activities.map((routineActivity, index)=>{
          return(                                                               
                  <div className="accordion-item" key={"rId" + routine.id + routineActivity.name}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#rId" + routine.id + routineActivity.id} aria-expanded="true" aria-controls={"rId" + routine.id + routineActivity.id}>
                      Activity Name: {routineActivity.name}
                    </button>                            
                    </h2>
                    <div id={"rId" + routine.id + routineActivity.id} className="accordion-collapse collapse" data-bs-parent={"#rId" + routine.id}>
                      <div className="accordion-body">
                        <p><strong>Activity Description: {routineActivity.description}</strong></p>
                        <p>Activity Duration: {routineActivity.duration}</p>
                        <p>Activity Count.: {routineActivity.count}</p>
                      </div>
                    </div>
                  </div>
                )
                })
                }

                </div>
              </div>
               <div> 
               <Popup id='popUp' trigger={<button>Edit</button>}modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div className='content'>
                                        Edit your post
                                    </div>
                                    
                                    <form onSubmit={(event)=>patchRoutineByIdAPI(token, routineId, event)}>
                                        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder={`${routine.name}`}/>
                                        {console.log(routine.name)}
                                        <input type="text" value={goal} onChange={(event)=>setGoal(event.target.value)}placeholder={`${routine.goal}`}/>
                                        {/* Is Public?
                                        <input type="checkbox" value={isPublic} onChange={()=>setisPublic(!delivery)} placeholder="Will Deliver? true or false"></input> */}
                                        <button type="submit">Edit Post</button>
                                    </form>
                                    
                                    <button onClick=
                                            {() => close()}>
                                                Close
                                    </button> 
                                </div>
                            )
                        }
                    </Popup>
                <button
                      onClick={() => {
                        // setRoutineId(routine.id);
                        deleteRoutineById(token,routine.id);
                        console.log("Routine", routine.id, "deleted")
                      }}
                    >
                      Delete Routine
                </button>
                {/* <button
                      onClick={() => {
                        
                      }}
                    >
                      Add Activity
                </button> */}
              
              </div>
              <form className='form' onSubmit={(event)=>postActivityToRoutineAPI(token, routineId, activityId,count, duration)}>
                <select onChange={(event)=>setActivityId(event.target.value)}>{activities.map((activity)=>{
                  return <option value={activity.id}>{activity.name}</option>;})}</select>
                  {console.log(token,routineId,activityId)}
                <input className="formField" type="text" value={count} onChange={(event)=>setCount(event.target.value)} placeholder="Count"></input>
                <input className="formField" type="text" value={duration} onChange={(event)=>setDuration(event.target.value)} placeholder="Duration"></input>
                <button id='submitButton' type="submit">Add Activity</button>
                {console.log(token,routineId,activityId,count,duration)}
              </form> 
            </div>
          </div>
        </div>
    )
  })
}
      </div>
    </div>
  </div>


<div>
<h3>Create a New Routine</h3>
<form className='form' onSubmit={postRoutine}>
    <input className="formField" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name"></input>
    <input className="formField" type="text" value={goal} onChange={(event)=>setGoal(event.target.value)} placeholder="Goal"></input>
    Is Public?
    <input id='checkbox' type="checkbox" value={isPublic} onChange={()=>setIsPublic(!isPublic)} placeholder="Is this a public routine?"></input>
    <button id='submitButton' type="submit">Submit Post</button>
</form> 
</div>
{/* <div>
<h3>Create a New Routine</h3>
<form className='form' onSubmit={(event)=>postRoutineAPI(event)}>
    <input className="formField" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name"></input>
    <input className="formField" type="text" value={goal} onChange={(event)=>setGoal(event.target.value)} placeholder="Goal"></input>
    Is Public?
    <input id='checkbox' type="checkbox" value={isPublic} onChange={()=>setIsPublic(!isPublic)} placeholder="Is this a public routine?"></input>
    <button id='submitButton' type="submit">Submit Post</button>
</form> 
</div> */}
</section>:null
)}