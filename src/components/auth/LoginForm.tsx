import React from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useFormik } from "formik";
import AuthService from "../../services/AuthService";
import AuthValidation from "./AuthValidation";
import { useAuth } from "../../provider/AuthProvider";

interface LoginFormProps {
  setOpenSnackbar: (open: boolean) => void;
  setSnackbarMessage: (message: string) => void;
  setSnackbarSeverity: (severity: "success" | "error") => void;
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  setOpenSnackbar,
  setSnackbarMessage,
  setSnackbarSeverity,
  onLoginSuccess,
}) => {
  const { setToken } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthValidation,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        await AuthService.login(
          { email: values.email, password: values.password },
          setToken
        );
        setSnackbarSeverity("success");
        onLoginSuccess();
      } catch (error) {
        setErrors({ password: "E-mail ou senha incorretos" });
        setSnackbarMessage("E-mail ou senha incorretos");
        setSnackbarSeverity("error");
      } finally {
        setOpenSnackbar(true);
        setSubmitting(false);
      }
    },
  });

  return (
    <Paper elevation={3} className="p-6 w-96 shadow-lg rounded-lg">
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
          {...formik.getFieldProps("email")}
          placeholder="Digite seu e-mail"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Senha"
          type="password"
          id="password"
          {...formik.getFieldProps("password")}
          placeholder="Digite sua senha"
          variant="outlined"
          error={!!formik.errors.password}
          helperText={formik.errors.password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={formik.isSubmitting}
          className="mt-4"
        >
          {formik.isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
