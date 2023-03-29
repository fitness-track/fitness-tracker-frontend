function Activities() {
  return(
    <div>Activities</div>
  )
}

export default Activities;

// Sample code used to test getActivities() function in /api/index.js
// Feel free to use this starter-code.

// import { useState, useEffect } from "react";
// import getActivities from "./components/api";


// function App() {  
//   const [activities, setActivities] = useState([]);  
  
//   useEffect(()=>{
//     async function getActivitiesAPI(){
//       try{
//         const response = await getActivities()
//         setActivities(response)
//       } catch(error) {
//         console.error(error)
//       }
//     }
//     getActivitiesAPI();
//   },[]);
  

//   return(
//     <div>
//       <h1>Fitness Track</h1>
//       {
//         activities.map((activity)=>{
//           return(
//             <div>
//               <p>Activity ID: {activity.id}</p>
//               <p>Activity Name: {activity.name}</p>
//               <p>Activity Description: {activity.description}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }