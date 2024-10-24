// src/components/auth/LoginForm.tsx
import React from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { useFormik } from 'formik';
import AuthService from '../../services/AuthService';
import AuthValidation from './AuthValidation';

interface LoginFormProps {
  setOpenSnackbar: (open: boolean) => void;
  setSnackbarMessage: (message: string) => void;
  setSnackbarSeverity: (severity: 'success' | 'error') => void;
  onLoginSuccess: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({
  setOpenSnackbar,
  setSnackbarMessage,
  setSnackbarSeverity,
  onLoginSuccess, 
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: AuthValidation,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const response = await AuthService.login(values);
        localStorage.setItem('token', response.token);
        setSnackbarSeverity('success');
        onLoginSuccess(); 
      } catch (error) {
        setErrors({ password: 'E-mail ou senha incorretos' });
        setSnackbarMessage('E-mail ou senha incorretos');
        setSnackbarSeverity('error');
      }
      setOpenSnackbar(true);
      setSubmitting(false);
    },
  });

  return (
    <Paper elevation={3} sx={{ padding: 4, width: '400px' }}> 
      <Typography variant="h5" component="h2" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="E-mail"
          type="email"
          id="email"
          {...formik.getFieldProps('email')}
          placeholder="Digite seu e-mail"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Senha"
          type="password"
          id="password"
          {...formik.getFieldProps('password')}
          placeholder="Digite sua senha"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
