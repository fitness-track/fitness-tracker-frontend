function Routines() {
  return(
    <div>Routines</div>
  )
}

export default Routines;



// Sample code used to test getRoutines() function in /api/index.js
// Feel free to use this starter-code.

// import { useState, useEffect } from "react";
// import { getRoutines } from "./components/api";


// function App() {  
//   const [routines, setRoutines] = useState([]);  
  
//   useEffect(()=>{
//     async function getRoutinesAPI(){
//       try{
//         const response = await getRoutines()
//         setRoutines(response)
//         console.log(response)
//       } catch(error) {
//         console.error(error)
//       }
//     }
//     getRoutinesAPI();
//   },[]);
  

//   return(
//     <div>
//       <h1>Fitness Track</h1>
//       {
//         routines.map((routine)=>{
//           return (
//             <div>
//               <p>Routine ID: {routine.id}</p>
//               <p>Creator ID: {routine.creatorId}</p>
//               <p>Routine Name: {routine.name}</p>
//               <p>Routine Goal: {routine.goal}</p>
//               <p>Routine creatorName: {routine.creatorName}</p>
//               { 
//                 routine.activities.map((routineActivity)=>{
//                   return (
//                     <div>
//                       <p>Activity ID: {routineActivity.id}</p>
//                       <p>Activity Name: {routineActivity.name}</p>
//                       <p>Activity Description: {routineActivity.description}</p>
//                       <p>Activity Duration: {routineActivity.duration}</p>
//                       <p>Activity Count.: {routineActivity.count}</p>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }