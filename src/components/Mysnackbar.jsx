import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Mysnackbar({open,meaasge}) {


  

 

  return (
    <div>
      
      <Snackbar open={open} autoHideDuration={6000}  >
        <Alert
          
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {meaasge}
        </Alert>
      </Snackbar>
    </div>
  );
}
