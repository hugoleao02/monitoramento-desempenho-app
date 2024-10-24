// src/pages/home/HomePage.tsx
import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar onLogout={handleLogout} /> {/* Passa a função de logout */}
      <Box sx={{ padding: 4, flexGrow: 1, backgroundColor: '#f0f2f5', height: '100vh' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo ao Sistema de Monitoramento de Desempenho (BI)
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6">Seus KPIs</Typography>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="body1">KPI 1</Typography>
              <Typography variant="body1">KPI 2</Typography>
              <Typography variant="body1">KPI 3</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
