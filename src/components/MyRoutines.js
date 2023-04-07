import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoutinesAPI, getUsernameRoutines, postRoutineAPI, deleteRoutineActivityById, deleteRoutineById} from "../api"
import Loading from "./Loading";
import './Loading';


export default function MyRoutines({token, username}) {
  const [routines, setRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [routineId, setRoutineId]=useState('')
  // const {username} = useParams()

  async function postRoutine(event){
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
                <button
                      onClick={() => {
                        // setRoutineId(routine.id);
                        deleteRoutineById(token,routine.id);
                        console.log("Routine", routine.id, "deleted")
                      }}
                    >
                      Edit Routine
                </button>
                <button
                      onClick={() => {
                        // setRoutineId(routine.id);
                        deleteRoutineById(token,routine.id);
                        console.log("Routine", routine.id, "deleted")
                      }}
                    >
                      Delete Routine
                </button>
                <button
                      onClick={() => {
                        
                      }}
                    >
                      Add Activity
                </button>
              
              </div>
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
<h3 className="h3">Create a New Routine</h3>
<form className='form' onSubmit={postRoutine}>
    <div className="container">
    <input className="username" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name"></input>
    <input className="password" type="text" value={goal} onChange={(event)=>setGoal(event.target.value)} placeholder="Goal"></input>
    <input className="checkBox" type="checkbox" value={isPublic} onChange={()=>setIsPublic(!isPublic)}></input>
    <h5 className="h5">Public?</h5>
    <button className="submit" id='submitButton' type="submit">Submit Post</button>
    </div>
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
