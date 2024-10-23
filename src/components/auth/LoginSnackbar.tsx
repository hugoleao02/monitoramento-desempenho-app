// src/components/auth/LoginSnackbar.tsx
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface LoginSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: 'success' | 'error';
}

const LoginSnackbar: React.FC<LoginSnackbarProps> = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        sx={{ 
          width: '80%',
          padding: 2, 
          fontSize: '1.2rem' 
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default LoginSnackbar;
