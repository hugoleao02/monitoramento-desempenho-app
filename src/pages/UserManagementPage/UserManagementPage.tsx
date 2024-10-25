// src/pages/UserManagementPage/UserManagementPage.tsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import UserTable from "./UserTable";
import EditUserModal from "./EditUserModal";

const UserManagementPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Usuários
      </Typography>
      <UserTable onEdit={handleEdit} />
      <EditUserModal open={open} onClose={handleClose} user={selectedUser} />
    </Box>
  );
};

export default UserManagementPage;
