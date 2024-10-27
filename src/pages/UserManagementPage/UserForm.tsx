import React from "react";
import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { User } from "../../interfaces/User";

interface UserFormProps {
  initialData?: User;
  onSubmit: (data: User) => void;
  onBack: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  initialData,
  onSubmit,
  onBack,
}) => {
  return (
    <Formik
      initialValues={
        initialData || { name: "", email: "", role: "User", active: true }
      }
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box className="p-4 bg-white shadow-md rounded-lg">
            <Field
              as={TextField}
              label="Nome"
              name="name"
              value={values.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              helperText="Digite o nome do usuário"
              className="border border-gray-300 rounded-md"
            />
            <Field
              as={TextField}
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              helperText="Digite o email do usuário"
              className="border border-gray-300 rounded-md"
            />
            <Field
              as={Select}
              name="role"
              value={values.role}
              onChange={handleChange}
              fullWidth
              margin="dense"
              className="border border-gray-300 rounded-md"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Field>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="secondary" onClick={onBack}>
                Voltar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Salvar
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
