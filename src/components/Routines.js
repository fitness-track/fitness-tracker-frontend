import { useEffect, useState } from "react";
import { getRoutinesAPI} from "../api"

export default function Routines({token}) {
  const [routines, setRoutines] = useState([]);

      useEffect(()=>{
      async function getRoutines(){
        const response = await getRoutinesAPI()
        setRoutines(response)
      }
      getRoutines();
    },[]);

  return(
        <div>
          <h1>Routines</h1>
          {
            routines?.map((routine)=>{
              return (
                <div className="card routinesCard text-bg-primary mb-3" key={"rId" + routine.id}>
                  {/* <p>Routine ID: {routine.id}</p> */}
                  {/* <p>Creator ID: {routine.creatorId}</p> */}
                  <p>Routine: {routine.name}</p>
                  <p>Goal: {routine.goal}</p>
                  <p>Created By: {routine.creatorName}</p>
                  {
                    routine.activities.length>0?<p>Activities:</p>:<p>No activities assigned to this routine</p>
                  }
                  
                  <div className="card activityCard text-bg-secondary mb-3">
                    <div id={"rId" + routine.id} className="accordion">
                      {
                        routine.activities.map((routineActivity, index)=>{
                          return(                                                               
                              <div className="accordion-item" key={"rId" + routine.id + routineActivity.name}>
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#rId" + routine.id + routineActivity.id} aria-expanded="true" aria-controls={"rId" + routine.id + routineActivity.id}>
                                    {/* <p>Activity ID: {routineActivity.id}</p> */}
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
                </div>
              )
            })
          }
        </div>
      )
}