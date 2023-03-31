import { useEffect, useState } from "react";
import { getRoutinesAPI} from "../api"

export default function Routines({token}) {
  const [routines, setRoutines] = useState([]);  

    useEffect(()=>{
    async function getRoutinesAPI(){
      try{
        const response = await getRoutinesAPI()
        setRoutines(response)
      } catch(error) {
        console.error(error)
      }
    }
    getRoutinesAPI();
  },[]);

  return(
        <div>
          <h1>Fitness Track</h1>
          {
            routines?.map((routine)=>{
              return (
                <div>
                  <p>Routine ID: {routine.id}</p>
                  <p>Creator ID: {routine.creatorId}</p>
                  <p>Routine Name: {routine.name}</p>
                  <p>Routine Goal: {routine.goal}</p>
                  <p>Routine creatorName: {routine.creatorName}</p>
                  { 
                    routine.activities.map((routineActivity)=>{
                      return (
                        <div>
                          <p>Activity ID: {routineActivity.id}</p>
                          <p>Activity Name: {routineActivity.name}</p>
                          <p>Activity Description: {routineActivity.description}</p>
                          <p>Activity Duration: {routineActivity.duration}</p>
                          <p>Activity Count.: {routineActivity.count}</p>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      )
}