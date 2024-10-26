import React from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { User } from "../../interfaces/User";

interface UserFormProps {
  initialData?: User;
  onSubmit: (data: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  return (
    <Formik
      initialValues={
        initialData || { name: "", email: "", role: "User", active: true }
      }
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box p={2}>
            <Field
              as={TextField}
              label="Nome"
              name="name"
              value={values.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Field
              as={TextField}
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Field
              as={Select}
              name="role"
              value={values.role}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Field>
            <FormControlLabel
              control={
                <Field
                  as={Checkbox}
                  name="active"
                  checked={values.active}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Ativo"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Salvar
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
