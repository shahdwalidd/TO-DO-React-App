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

export default function Todotask({title,details}) {
  return (
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
        aria-label="check"
        sx={{
          backgroundColor: "#f3f4f6",
          color: "#10b981",
          "&:hover": { backgroundColor: "#e5e7eb" },
          borderRadius: 2,
          p: "6px"
        }}
      >
        <CheckCircleIcon fontSize="small" />
      </IconButton>

      <IconButton
        aria-label="edit"
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

      <IconButton
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
  );
}
