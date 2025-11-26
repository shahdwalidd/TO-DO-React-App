import React from "react";
import Todolist from "./components/Todo.jsx";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Toastprovider } from "./contexts/Toastcontext.jsx";
import Mysnackbar from "./components/Mysnackbar.jsx";
import Todosprovider from "./contexts/Todoscontext.jsx";

const theme = createTheme({
  typography: {
    fontFamily: 'myfont',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Todosprovider>
      <Toastprovider>
        <div
          style={{
            backgroundColor: 'rgba(250, 250, 250, 0.92)',
            height: "100vh",
            width: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Todolist />
        
        </div>
      </Toastprovider>
      </Todosprovider>
    </ThemeProvider>
  );
}

export default App;
