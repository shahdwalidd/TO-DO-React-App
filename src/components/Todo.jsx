import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TODO from "./TOdotask";

export default function TOdolist() {
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
    px: 2                        
  }}
>
  <Card sx={{
    maxWidth: 600,         
    width: '100%',         
    margin: '0 auto',   
    p: 4,
    backgroundColor: '#1e3a8a',
    color: 'white',
    borderRadius: 3,
    boxShadow: 5
  }}>
    <CardContent>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        MY TASKS
      </Typography>
      
      <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.3)' }} />

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Task Filter"
        sx={{
          mb: 3,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 2,
          '& .Mui-selected': {
            backgroundColor: '#3b82f6', 
            color: '#fff'
          }
        }}
      >
        <ToggleButton value="all">ALL</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="notcompleted">Not Completed</ToggleButton>
      </ToggleButtonGroup>

      <TODO />
    </CardContent>
  </Card>
</Container>

);
}
