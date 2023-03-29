import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

import {

} from "./components"

function App(){

    // add const useStates

    useEffect(()=>{
        const savedToken = local.Storage.getItem("token")
        if (savedToken){
            setToken(savedToken)
        }
    },[])

    //return Navbar, <routes>, <Footer/>

}


root.render(<App />);
root.render(<BrowserRouter><App/></BrowserRouter>)
