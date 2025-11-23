import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../App.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Todotask({id,title,details,onComplete,isCompleted,ondelete, onedit }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

   const handleClickclose = () => {
    setOpen(false);
  };
 

  const [open1, setOpen1] = React.useState(false);
  const [editText, setEditText] = useState(title);

  const handleClickOpenedit = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
   

  return (
    <>
     <Dialog
        open={open}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ALRET
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that yu want to delete this task
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickclose} >no</Button>
          <Button  onClick={()=>{
            ondelete(id)
          }} autoFocus>
           yes 
          </Button>
        </DialogActions>
      </Dialog>
      {/* edit modal */}
     <Dialog open={open1} onClose={handleClose}>
  <DialogTitle>Edit Task</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      label="Task"
      type="text"
      fullWidth
      variant="standard"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button
      onClick={() => { onedit(id, editText); handleClose(); }}
    >
      OK
    </Button>
  </DialogActions>
</Dialog>
    <Card className="todo"
      sx={{
        minWidth: 275,
        backgroundColor: "#ffffff",
        color: "#111827",
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        mb: 2
      }}
    >
      <CardContent>
        
       <Grid container alignItems="center"  justifyContent="space-between">

  {/* العنوان */}
  <Grid
    item
    xs={8}
    sx={{
      pl: 1  
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
     {title}
    </Typography>
     <Typography variant="h7" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
      {details}
      </Typography>
  </Grid>

  {/* الأزرار */}
  <Grid
    item
    xs={4}
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      pr: 1,          // إبعاد عن اليمين
      ml: 2           // أهم حاجة: مسافة بينهم وبين العنوان
    }}
  >
    <Stack direction="row" spacing={1} sx={{ mr: 1 }}>
      
     <IconButton
  onClick={() => onComplete(id)}
  aria-label="check"
  sx={{
    backgroundColor: isCompleted ? "#10b981" : "#f3f4f6",
    color: isCompleted ? "white" : "#10b981",
    border: isCompleted ? "2px solid #10b981" : "2px solid transparent",
    "&:hover": {
      backgroundColor: isCompleted ? "#0f9d77" : "#e5e7eb",
    },
    borderRadius: 2,
    p: "6px",
    transition: "0.3s",
  }}
>
  <CheckCircleIcon fontSize="small" />
</IconButton>


      <IconButton
        aria-label="edit" onClick={handleClickOpenedit}
        sx={{
          backgroundColor: "#f3f4f6",
          color: "#3b82f6",
          "&:hover": { backgroundColor: "#e5e7eb" },
          borderRadius: 2,
          p: "6px"
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>

      <IconButton onClick={handleClickOpen}
        aria-label="delete"
        sx={{
          backgroundColor: "#f3f4f6",
          color: "#ef4444",
          "&:hover": { backgroundColor: "#e5e7eb" },
          borderRadius: 2,
          p: "6px"
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>

    </Stack>
  </Grid>

</Grid>

      </CardContent>
    </Card>
  </>
  );
}  
