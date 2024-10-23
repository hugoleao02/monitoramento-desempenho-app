import { Box } from "@mui/material";

const Grafico = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '60%', 
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
      }}
    >
      <Box
        sx={{
          height: '60%', 
          width: '15%', 
          backgroundColor: '#3f51b5',
          borderRadius: '5px', 
          position: 'relative', 
          ':after': { 
            content: '""', 
            position: 'absolute', 
            left: '50%', 
            bottom: '100%', 
            transform: 'translateX(-50%)', 
            width: '50%', 
            height: '10px', 
            backgroundColor: '#3f51b5' 
          }
        }} 
      />
      <Box
        sx={{
          height: '80%', 
          width: '15%', 
          backgroundColor: '#f44336',
          borderRadius: '5px', 
          position: 'relative', 
          ':after': { 
            content: '""', 
            position: 'absolute', 
            left: '50%', 
            bottom: '100%', 
            transform: 'translateX(-50%)', 
            width: '50%', 
            height: '10px', 
            backgroundColor: '#f44336' 
          }
        }} 
      />
      <Box
        sx={{
          height: '40%', 
          width: '15%', 
          backgroundColor: '#4caf50',
          borderRadius: '5px', 
          position: 'relative', 
          ':after': { 
            content: '""', 
            position: 'absolute', 
            left: '50%', 
            bottom: '100%', 
            transform: 'translateX(-50%)', 
            width: '50%', 
            height: '10px', 
            backgroundColor: '#4caf50' 
          }
        }} 
      />
    </Box>
  );
};

export default Grafico;
