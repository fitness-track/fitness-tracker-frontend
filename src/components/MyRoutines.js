import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { getUsernameRoutines, postRoutineAPI, getActivitiesAPI} from "../api"
import Loading from "./Loading";
import './MyRoutines.css';

export default function MyRoutines({token, username, setFooterMessage}) {
  const [routines, setRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")
  const [activities, setActivities] = useState([]);
  const [isPublic, setIsPublic] = useState(false)
  const navigate = useNavigate()

  async function postRoutine(event){
    event.preventDefault()
    setFooterMessage("")
    console.log(token, name, goal, isPublic)
    const results = await postRoutineAPI(token, name, goal, isPublic)
    console.log(results)
    if (results.id){
      setFooterMessage("Success-New-Routine")
    }
    setGoal("")
    setName("")
  }

  useEffect(()=>{
    if(token && username) {async function getUserRoutines(event){
      setIsLoading(true)
      const response = await getUsernameRoutines(username, token)
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
  
      {routines?.map((routine)=>{
        return (
          
            <div className="col">
              <div className="routinesCard" key={"rId" + routine.id}>
                <p>Routine ID: {routine.id}</p>
                <div className="card-body">
                  <h3>{routine.name}</h3>
                  <h5>{routine.goal}</h5>
                  {
                    routine.activities.length>0?<p>This routine has <strong>{routine.activities.length}</strong> activities:</p>:<p>No activities assigned to this routine</p>
                  }
                  <Link to={`../../EditRoutine/${routine.id}/${routine.name}/${routine.goal}`}>
                  <button type="button" className="button" data-toggle="tooltip" ><i className="bi-scissors"></i></button>
                  </Link>
              
                  <div className="card activityCard text-bg-secondary mb-3 overflow-auto">
                    <div id={"rId" + routine.id} className="accordion">
                    {
                    routine.activities.map((routineActivity, index)=>{
              return(
                      <div className="accordion-item" key={"rId" + routine.id + routineActivity.name}>
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#rId" + routine.id + routineActivity.id} aria-expanded="true" aria-controls={"rId" + routine.id + routineActivity.id}>
                        {routineActivity.name}
                        </button>
                        </h2>
                        <div id={"rId" + routine.id + routineActivity.id} className="accordion-collapse collapse" data-bs-parent={"#rId" + routine.id}>
                          <div className="accordion-body">
                            <p><i className="bi bi-fire"></i>{routineActivity.description}</p>
                            <p><i className="bi-stopwatch-fill"></i> {routineActivity.duration}</p>
                            <p><i className="bi bi-repeat"></i>{routineActivity.count}</p>
                            <p>ID: {routineActivity.routineActivityId}</p>
                          </div>
                          <Link to={`../../EditRoutineActivity/${routineActivity.routineActivityId}/${routineActivity.duration}/${routineActivity.count}`}>
                            <button type="button" className="button" data-toggle="tooltip" ><i className="bi-scissors"></i></button>
                          </Link>
                        </div>

                      </div>
                    )
                    })
                    }
                    </div>
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
      <div className="col">
        <form className="centered-form card p-2 container" onSubmit={postRoutine}>
          <h4>Add a new routine:</h4>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="activityNameForm"  value={name} onChange={(event)=>setName(event.target.value)} />
            <label htmlFor="activityNameForm">Name:</label>
          </div>
          <div className="form-floating mb-3">
            <textarea type="text" className="form-control" id="descForm" value={goal} onChange={(event)=>setGoal(event.target.value)}/>
            <label htmlFor="descForm">Goal:</label>
          </div>
          <button className="btn btn-secondary" type="submit"><i className="bi bi-bookmark-plus"></i> Add New Routine</button>
        </form>
      </div>

    </section>:null
  )
}