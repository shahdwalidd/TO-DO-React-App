import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TODO from "./TOdotask";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Todotask from './TOdotask';
const todos=[{
id:uuidv4(),
title:"reading book",
details:"from page 1 to 50",
iscompleted:false 
},
{
id:uuidv4()
,
title:"reading book",
details:"from page 1 to 50",
iscompleted:false 
},
{
id:uuidv4(),
title:"reading book",
details:"from page 1 to 50",
iscompleted:false 
}
]

export default function TOdolist() {
  const todosjsx = todos.map((t)=>{
    return <TODO  key={t.id} title={t.title} details={t.details}/>
  })
  const [alignment, setAlignment] = React.useState('all');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        mt: 5, 
        display: 'flex', 
        justifyContent: 'center',   
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 650,
          width: '100%',
          p: 4,
          background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
          color: "white",
          borderRadius: 4,
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
        }}
      >
        <CardContent>

          {/* ------------------ TITLE ------------------ */}
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontWeight: "bold",
              letterSpacing: 1,
              textAlign: "center",
              mb: 3
            }}
          >
            MY TASKS
          </Typography>

          <Divider 
            sx={{ 
              mb: 3, 
              borderColor: "rgba(255,255,255,0.3)" 
            }} 
          />


          {/* ------------------ FILTER BUTTONS ------------------ */}
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Task Filter"
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              gap: 1,
              "& .MuiToggleButtonGroup-grouped": {
                border: 0,
                borderRadius: "12px !important",
                px: 3,
                py: 1.3,
                fontWeight: "bold",
                fontSize: "0.9rem",
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white",
                transition: "0.3s",
              },
              "& .Mui-selected": {
                backgroundColor: "#3b82f6 !important",
                color: "#fff !important",
                boxShadow: "0 3px 10px rgba(59,130,246,0.5)",
              }
            }}
          >
            <ToggleButton value="all">ALL</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
            <ToggleButton value="notcompleted">Not Completed</ToggleButton>
          </ToggleButtonGroup>


          {/* ------------------ TASK LIST ------------------ */}
         {todosjsx }


          {/* ------------------ INPUT AREA ------------------ */}
          <Grid 
            container  alignItems="center"  justifyContent="space-between"
            spacing={2} 
            sx={{ mt:4}}
          >
            <Grid item xs={8}>
              <TextField
                 
                label="Enter task"
                variant="outlined"
                width='1000px'
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.4)"
                    },
                    "&:hover fieldset": {
                      borderColor: "white"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#60a5fa"
                    }
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#93c5fd"
                  }
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <button
              
                  style={{
        width: "100px",
        height: "100%",               // يخلي الزرار نفس ارتفاع الانبوت
        padding: "16px 0",            // تكبير الحجم
        fontSize: "1.2rem",           // تكبير الخط
        fontWeight: "bold",
        backgroundColor: "#2563eb",   // أزرق أحلى
        color: "white",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 4px 14px rgba(37,99,235,0.5)",
      }}
                
              >
                ADD
              </button>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    </Container>
  );
}
