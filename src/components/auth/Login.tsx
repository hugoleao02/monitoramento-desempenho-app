import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import LoginSnackbar from "./LoginSnackbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grafico from "./Grafico";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 500,
      letterSpacing: "0.1em",
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const Login: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/home");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex h-screen bg-gray-100">
        <Box className="flex-1 flex items-center justify-center bg-indigo-600 text-white p-8 text-center">
          <Typography variant="h4" component="h1">
            Sistema de Monitoramento de Desempenho (BI)
          </Typography>
        </Box>

        <Box className="flex-1 flex items-center justify-center p-4">
          <LoginForm
            setOpenSnackbar={setOpenSnackbar}
            setSnackbarMessage={setSnackbarMessage}
            setSnackbarSeverity={setSnackbarSeverity}
            onLoginSuccess={handleLoginSuccess}
          />
        </Box>

        <Box className="flex-1 flex items-center justify-center p-4">
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
