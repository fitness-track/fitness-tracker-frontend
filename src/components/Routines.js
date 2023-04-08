import { useEffect, useState } from "react";
import { getRoutinesAPI} from "../api"
import Loading from "./Loading";
import './Routines.css';

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [nameFilter, setNameFilter] = useState("");
  const filterNames = routines.filter(routine => nameMatches(routine, nameFilter));
  const routinesToDisplay = nameFilter.length ? filterNames : routines;
  
  function nameMatches(routine, nameToFind){
    if (nameToFind === routine.creatorName){
      return true;
    }
  }

  useEffect(()=>{
    async function getRoutines(){
      setIsLoading(true)
      const response = await getRoutinesAPI()
      setRoutines(response)
      setIsLoading(false)
    }
    getRoutines();
  },[]);

  return(
    isLoading?<Loading/>:

      <section className="container text-center">
      <h1 className="page-title">Routines Library:</h1>
        <div className="wrapper">
        {
          nameFilter?
            <h5 className="filter-link" onClick={() => setNameFilter("")}> {nameFilter}'s Routines. <b><u>Reset Filter.</u></b></h5>   
          :null
        }
          <div className="subWrapper">
            <div className="row row-cols-1 row-cols-lg-3">
            {
            routinesToDisplay?.map((routine)=>{
              return (
                routine.isPublic?
                <div className="col" key={"rId" + routine.id}>
                  <div className="routinesCard">
                    <div className="card-body">
                      <h3>{routine.name}</h3>
                      <h5>{routine.goal}</h5>
                      {
                        routine.activities.length>0?<p>This routine has <strong>{routine.activities.length}</strong> activities:</p>:<p>No activities assigned to this routine</p>
                      }
                      <div className="card activityCard text-bg-secondary mb-3 overflow-auto">
                        <div id={"rId" + routine.id} className="accordion">
                        {
                          routine.activities.map((routineActivity)=>{
                          return(                                                               
                            <div className="accordion-item" key={"rId" + routine.id + routineActivity.name}>
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#rId" + routine.id + routineActivity.id} aria-expanded="true" aria-controls={"rId" + routine.id + routineActivity.id}>
                                  {routineActivity.name}
                                </button>                            
                              </h2>
                              <div id={"rId" + routine.id + routineActivity.id} className="accordion-collapse collapse" data-bs-parent={"#rId" + routine.id}>
                                <div className="accordion-body">
                                  <p><i className="bi bi-fire"></i> {routineActivity.description}</p>
                                  <p><i className="bi-stopwatch-fill"></i> {routineActivity.duration} mins</p>
                                  <p><i className="bi bi-repeat"></i> {routineActivity.count} reps</p>
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
                      <h5 onClick={() => setNameFilter(routine.creatorName)} className="footer"><i className="bi-person-circle"></i>Created By: {routine.creatorName}</h5>   
                    </div>
                  </div>
                </div>:null
              )
            })
          }     
        </div>
      </div>
    </div>
  </section>
)}