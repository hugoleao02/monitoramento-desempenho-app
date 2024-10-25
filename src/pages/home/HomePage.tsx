import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex h-screen">
      <Box className="flex-grow p-4 bg-gray-100 overflow-auto">
        <Typography variant="h4" className="mb-4">
          Bem-vindo ao Sistema de Monitoramento de Desempenho (BI)
        </Typography>

        <Grid container spacing={4} className="mt-2">
          <Grid item xs={12}>
            <Typography variant="h6">Seus KPIs</Typography>
            <Paper className="p-4 bg-white shadow-md">
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
