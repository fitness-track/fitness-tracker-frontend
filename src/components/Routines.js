import { useEffect, useState } from "react";
import { getRoutinesAPI} from "../api"
import './Routines.css';

export default function Routines({token}) {
  const [routines, setRoutines] = useState([]);

      useEffect(()=>{
      async function getRoutines(){
        const response = await getRoutinesAPI()
        setRoutines(response)
      }
      getRoutines();
    },[]);

  const RandomVerb = () => {
      const verbArray = ["Created", "Pumped", "Created", "Ripped", "Get Swol", "Created", "Jacked", "Lifted", "Crunched", "Created", "Setlist"] 
      const randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
      return randomVerb + " by: "
  }

  return(

<section className="container text-center">
  <div className="wrapper">
    <div className="subWrapper">
      <div className="row row-cols-1 row-cols-lg-3">
{
  routines?.map((routine)=>{
    return (
        <div className="col">
          <div className="card routinesCard text-bg-primary" key={"rId" + routine.id}>
            {/* <p>Routine ID: {routine.id}</p> */}
            {/* <p>Creator ID: {routine.creatorId}</p> */}
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
                      {/* <p>Activity ID: {routineActivity.id}</p> */}
                      Activity: {routineActivity.name}
                    </button>                            
                    </h2>
                    <div id={"rId" + routine.id + routineActivity.id} className="accordion-collapse collapse" data-bs-parent={"#rId" + routine.id}>
                      <div className="accordion-body">
                        <p><strong>Description: {routineActivity.description}</strong></p>
                        <p>Duration: {routineActivity.duration}</p>
                        <p>Count.: {routineActivity.count}</p>
                      </div>
                    </div>
                  </div>
                )
                })
                }

                </div>
              </div>
            </div>
            <div className="card-footer">
            <h5><i className="bi bi-person-circle"></i><RandomVerb/> {routine.creatorName}</h5>
            </div>
          </div>
        </div>
    )
  })
}
      </div>
    </div>
  </div>
</section>
)}