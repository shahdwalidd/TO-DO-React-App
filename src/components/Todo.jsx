/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useMemo, useContext, useReducer } from 'react';
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
import { Toastcontext } from '../contexts/Toastcontext';
import Todosreducer from '../reducers/Todosreducer';

const initialTodos = [
  { id: uuidv4(), title: "reading book", details: "from page 1 to 50", isCompleted: false },
  { id: uuidv4(), title: "study", details: "data mining", isCompleted: false },
  { id: uuidv4(), title: "do tasks", details: "for sections", isCompleted: false }
];

export default function TOdolist() {
  const { showHideToast } = useContext(Toastcontext);
  const [titleInput, setTitle] = useState("");
  const [alignment, setAlignment] = useState("all");


  const [todos, dispatch] = useReducer(Todosreducer, [], () => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    return storage && storage.length ? storage : initialTodos;
  });

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  const handleComplete = (id) => {
    const currentTodo = todos.find(todo => todo.id === id);
    if (!currentTodo) return;
    const willBeCompleted = !currentTodo.isCompleted;
    const message = willBeCompleted
      ? "Well done, you have completed this task!"
      : "You marked this task as uncompleted";

    dispatch({ type: "com", payload: { id } });
    showHideToast(message);
  };

  const handledelete = (id) => {
    dispatch({ type: "del", payload: { id } });
    showHideToast("Task deleted successfully");
  };

  const handeledit = (id, newTitle, newDetails) => {
    dispatch({ type: "edit", payload: { id, title: newTitle, details: newDetails } });
    showHideToast("Task edited successfully");
  };

  const handleAddClick = () => {
    if (titleInput.trim() === "") return;
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false
    };
    dispatch({ type: "added", payload: newTodo });
    setTitle("");
    showHideToast("New task added successfully");
  };

  const filteredTodos = useMemo(() => {
    return todos.filter(t => {
      if (alignment === "completed") return t.isCompleted;
      if (alignment === "notcompleted") return !t.isCompleted;
      return true;
    });
  }, [todos, alignment]);

  return (
    <Container maxWidth="lg" sx={{ mt: 5, display: 'flex', justifyContent: 'center', px: 2 }}>
      <Card sx={{
        maxWidth: 650,
        width: '100%',
        p: 4,
        background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
        color: "white",
        borderRadius: 4,
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
      }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
            MY TASKS
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.3)" }} />

          {/* FILTER BUTTONS */}
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
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
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white"
              },
              "& .Mui-selected": {
                backgroundColor: "#3b82f6 !important",
                color: "#fff !important"
              }
            }}
          >
            <ToggleButton value="all">ALL</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
            <ToggleButton value="notcompleted">Not Completed</ToggleButton>
          </ToggleButtonGroup>

          {/* TASK LIST */}
          <div className="todos-container">
            {filteredTodos.map(t => (
              <TODO
                key={t.id}
                id={t.id}
                title={t.title}
                details={t.details}
                isCompleted={t.isCompleted}
                onComplete={handleComplete}
                ondelete={handledelete}
                onedit={handeledit}
              />
            ))}
          </div>

          {/* INPUT AREA */}
          <Grid container alignItems="center" justifyContent={'space-between'} spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={8}>
              <TextField
                value={titleInput}
                onChange={(e) => setTitle(e.target.value)}
                label="Enter task"
                variant="outlined"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
                sx={{ width: "300px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={4}>
              <button
                onClick={handleAddClick}
                style={{
                  width: "100px",
                  height: "100%",
                  padding: "16px 0",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer"
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
