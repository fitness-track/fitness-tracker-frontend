import { useEffect, useState } from "react";
import { getActivitiesAPI} from "../api"
import Loading from "./Loading";
import './Activities.css';

export default function Activities({token}) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
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
    <section className="container text-center">
      <div className="wrapper">
        <div className="subWrapper">
          <div className="row row-cols-2 row-cols-lg-4">
  {
    activities?.map((activity)=>{
      return(
        <div className="col">
          <div className="card text-bg-primary actCard" key={"aId" + activity.id}>
            <div className="card-body">
            <i className="bi bi-lightning-charge-fill"/><strong> {activity.name}</strong> 
            <p><i className="bi bi-info-circle"/> {activity.description}</p>
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
  )
}

