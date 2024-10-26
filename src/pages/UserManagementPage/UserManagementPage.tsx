// src/pages/UserManagementPage/UserManagementPage.tsx
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import UserService, { User } from "../../services/UserService";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching users..."); // Adicione este log
      try {
        const fetchedUsers = await UserService.fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        setError("Erro ao buscar usuários");
      }
    };
    fetchData();
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleFormSubmit = async (userData: User) => {
    try {
      if (selectedUser) {
        await UserService.updateUser(selectedUser.id!, userData);
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, ...userData } : user
          )
        );
      } else {
        const newUser = await UserService.createUser(userData);
        setUsers([...users, newUser]);
      }
      setShowForm(false);
    } catch (error) {
      setError("Erro ao criar ou atualizar usuário");
    }
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
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserManagementPage;
