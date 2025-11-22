import React from "react";
import Todolist from "./components/Todo.jsx";
import Box from "@mui/material/Box";
import './App.css'

function App() {
  return (
   <div style={{ backgroundColor: 'rgba(250, 250, 250, 0.92)',
  height: "100vh",
  width: '600px',
  display: 'flex',   
  justifyContent: 'center',
 alignItems: 'flex-start',
   paddingTop: '50px'   }}>
   <Todolist/>
   </div>
  );
}

export default App;
