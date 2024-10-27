import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import UserService from "../../services/UserService";
import { User } from "../../interfaces/User";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await UserService.fetchUsers();
        setUsers(fetchedUsers);
      } catch {
        setError("Erro ao buscar usuários");
      }
    };
    fetchData();
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = async (user: User) => {
    try {
      const fetchedUser = await UserService.getUserById(user.id as string);
      setSelectedUser(fetchedUser);
      setShowForm(true);
    } catch {
      setError("Erro ao buscar usuário");
    }
  };

  const handleToggleActive = async (userId: string) => {
    const userToUpdate = users.find((user) => user.id === userId);
    if (userToUpdate) {
      const updatedUser = { ...userToUpdate, active: !userToUpdate.active };
      try {
        await UserService.updateUser(userId, updatedUser);
        setUsers(
          users.map((user) => (user.id === userId ? updatedUser : user))
        );
      } catch {
        setError("Erro ao atualizar status do usuário");
      }
    }
  };

  const handleFormSubmit = async (userData: User) => {
    try {
      if (selectedUser) {
        await UserService.updateUser(selectedUser.id as string, userData);
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
    } catch {
      setError("Erro ao criar ou atualizar usuário");
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await UserService.deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch {
      setError("Erro ao deletar usuário");
    }
  };

  const handleBack = () => {
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <Box className="p-4">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Usuários
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddUser}
        className="mb-4"
      >
        Adicionar Usuário
      </Button>
      {showForm ? (
        <UserForm
          initialData={selectedUser || undefined}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      ) : (
        <UserTable
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onToggleActive={handleToggleActive}
        />
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
