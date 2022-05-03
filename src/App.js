import React from 'react'
import './App.css';
import {
  Routes, 
  Route,
} from "react-router-dom"

import RouteComponents from "./routes"

function App() {
  return (
    <Routes>
      {RouteComponents.map((data)=>(
        <Route path={data.path} element={data.element}/>
      ))}
    </Routes>
  );
}

export default App;
