// src/pages/UserManagementPage/UserForm.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserFormProps {
  initialData?: User;
  onSubmit: (data: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<User>(
    initialData || { name: "", email: "", role: "User", status: "Active" }
  );

  // Handle changes for TextField components
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes for Select components
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <TextField
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleInputChange} // Usando handleInputChange para TextField
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange} // Usando handleInputChange para TextField
        fullWidth
        margin="normal"
      />
      <Select
        name="role"
        value={formData.role}
        onChange={handleSelectChange} // Usando handleSelectChange para Select
        fullWidth
        margin="dense" // Alterado para "dense"
      >
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </Select>
      <Select
        name="status"
        value={formData.status}
        onChange={handleSelectChange} // Usando handleSelectChange para Select
        fullWidth
        margin="dense" // Alterado para "dense"
      >
        <MenuItem value="Active">Ativo</MenuItem>
        <MenuItem value="Inactive">Inativo</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Salvar
      </Button>
    </Box>
  );
};

export default UserForm;
