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
                <div className="card routinesCard text-bg-primary mb-3">
                  {/* <p>Routine ID: {routine.id}</p> */}
                  {/* <p>Creator ID: {routine.creatorId}</p> */}
                  <p>Routine: {routine.name}</p>
                  <p>Goal: {routine.goal}</p>
                  <p>creatorName: {routine.creatorName}</p>
                  <p>Number of activities: {routine.activities.length}</p>
                  <div className="card activityCard text-bg-secondary mb-3">
                    <div id={"rId" + routine.id} className="carousel slide">
                      <div className="carousel-inner">
                        {
                          routine.activities.map((index, routineActivity)=>{
                            console.log(routineActivity)
                            console.log(index)
                            return(
                              index === 0?
                                <div className="carousel-item active">
                                  <div className="d-block w-100">
                                    <p>Activity ID: {routineActivity.id}</p>
                                    <p>Activity Name: {routineActivity.name}</p>
                                    <p>Activity Description: {routineActivity.description}</p>
                                    <p>Activity Duration: {routineActivity.duration}</p>
                                    <p>Activity Count.: {routineActivity.count}</p>
                                   </div>
                                </div>:
                                <div className="carousel-item">
                                  <div className="d-block w-100">
                                    <p>Activity ID: {routineActivity.id}</p>
                                    <p>Activity Name: {routineActivity.name}</p>
                                    <p>Activity Description: {routineActivity.description}</p>
                                    <p>Activity Duration: {routineActivity.duration}</p>
                                    <p>Activity Count.: {routineActivity.count}</p>
                                  </div>                            
                                </div>
                            )
                          })
                        }
                      </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={"rId" + routine.id} data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"rId" + routine.id} data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
}