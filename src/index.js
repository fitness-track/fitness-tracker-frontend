import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client"
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(<App />);

root.render(<BrowserRouter><App/></BrowserRouter>)