// src/pages/UserManagementPage/UserManagementPage.tsx
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleFormSubmit = (userData: User) => {
    if (selectedUser) {
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...userData } : user
        )
      );
    } else {
      setUsers([...users, { ...userData, id: users.length + 1 }]);
    }
    setShowForm(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Usuários
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddUser}>
        Adicionar Usuário
      </Button>
      {showForm ? (
        <UserForm
          initialData={selectedUser || undefined}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <UserTable users={users} onEdit={handleEditUser} />
      )}
    </Box>
  );
};

export default UserManagementPage;
