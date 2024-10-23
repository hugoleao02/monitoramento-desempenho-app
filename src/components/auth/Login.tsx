// src/components/auth/Login.tsx
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import LoginSnackbar from './LoginSnackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grafico from './Grafico';

// Tema personalizado com a fonte Roboto
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 500,
      letterSpacing: '0.1em', // Adiciona espaçamento entre letras para um look moderno
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const Login: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          backgroundColor: '#f0f2f5',
        }}
      >
        {/* Seção de Texto */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3f51b5',
            color: 'white',
            padding: 4,
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h1">
            Sistema de Monitoramento de Desempenho (BI)
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
            Gerencie seu desempenho de maneira eficaz.
          </Typography>
        </Box>
        
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <LoginForm 
            setOpenSnackbar={setOpenSnackbar} 
            setSnackbarMessage={setSnackbarMessage} 
            setSnackbarSeverity={setSnackbarSeverity} 
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: 4,
          }}
        >
         <Grafico />
        </Box>

        <LoginSnackbar 
          open={openSnackbar} 
          onClose={handleCloseSnackbar} 
          message={snackbarMessage} 
          severity={snackbarSeverity} 
        />
      </Box>
    </ThemeProvider>
  );
};

export default Login;
