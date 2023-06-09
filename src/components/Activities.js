import { useEffect, useState } from "react";
import { getActivitiesAPI, postActivityAPI} from "../api"
import Loading from "./Loading";
import './Activities.css';
import logo from "../assets/activities.jpg"

export default function Activities({token, setFooterMessage}) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [activityName, setActivityName] = useState("")
  const [activityDescription, setActivityDescription] = useState("")
  
  const handleActivityNameChange = (event) => {
    setActivityName(event.target.value);   
}

  const handleActivityDescriptionChange = (event) => {
    setActivityDescription(event.target.value);   
}

  useEffect(()=>{
    async function getActivities(){
      setIsLoading(true)
      const response = await getActivitiesAPI()
      setActivities(response)
      setIsLoading(false)
    }
    getActivities();
  },[]);

  async function submitActivity(event){
    event.preventDefault();
    setFooterMessage("")
    const response = await postActivityAPI(token, activityName, activityDescription);
  
    if (response.id){
      setFooterMessage("Success-New-Activity")
    }
    if (response.name==="NotFound"){
      setFooterMessage("Error-New-Activity-Exists")
    }
    if (response.name==="MissingUserError"){
      setFooterMessage("Error-New-Activity")
    }
    setActivityName("");
    setActivityDescription("");
  }

  return(
    isLoading?<Loading/>:

    <section className="container text-center">
      <div className="wrapper">
          {
            token?
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <img className="active-logo" src={logo} alt="active person"/>
                </div>
                <div className="col">
                  <form className="centered-form card p-2 container" onSubmit={submitActivity}>
                    <h4>Add a new activity:</h4>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="activityNameForm" onChange={handleActivityNameChange} value={activityName}/>
                      <label htmlFor="activityNameForm">Activity Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea type="text" className="form-control" id="descForm" onChange={handleActivityDescriptionChange} value={activityDescription}/>
                      <label htmlFor="descForm">Description:</label>
                    </div>
                    <button className="btn btn-secondary" type="submit"><i className="bi bi-bookmark-plus"></i> Add New Activity</button>
                  </form>
                </div>
              </div>
            </div>:null
          }
      
        <div className="subWrapper">
        <h2>Activity Library:</h2>
          <div className="row row-cols-2 row-cols-lg-4">
  {
    activities?.map((activity)=>{
      return(
        <div className="col" key={"aId" + activity.id}>
          <div className="cardboy">
            <div className="body">
            <i className="name"/><strong> {activity.name}</strong> 
            <p><i className=""/> {activity.description}</p>
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

