import React from "react";
import Todolist from "./components/Todo.jsx";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
const theme = createTheme({
  typography: {
    fontFamily: 'myfont',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
   <div style={{ backgroundColor: 'rgba(250, 250, 250, 0.92)',
  height: "100vh",
  width: '600px',
  display: 'flex',   
  justifyContent: 'center',
 alignItems: 'flex-start',
   }}>
   
   <Todolist/>
   </div>
   </ThemeProvider>
  );
}

export default App;
