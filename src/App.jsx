import React from "react";
import Todolist from "./components/Todo.jsx";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import { useState } from "react";
import { Toastcontext } from "./contexts/Toastcontext.jsx";
import Mysnackbar from"./components/Mysnackbar.jsx"
const theme = createTheme({
  typography: {
    fontFamily: 'myfont',
  },
});

  
function App() {
    const [open, setOpen] = useState(false);
    const [meaasge,setmesage] =useState("");
    function showhidetoast(meaasge){
    setOpen(true);
    setmesage(meaasge);
    setTimeout(()=>{
      setOpen(false)
    },2000)
  }
  return (
    
    <ThemeProvider theme={theme}>
      <Toastcontext.Provider value={{showhidetoast}}>
   <div style={{ backgroundColor: 'rgba(250, 250, 250, 0.92)',
  height: "100vh",
  width: '600px',
  display: 'flex',   
  justifyContent: 'center',
 alignItems: 'flex-start',
   }}>
  
   <Todolist/>
   < Mysnackbar open={open} meaasge={meaasge}/>
   </div>
   </Toastcontext.Provider>
   </ThemeProvider>
  );
}

export default App;
