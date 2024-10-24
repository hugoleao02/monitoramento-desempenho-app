// src/pages/UserManagementPage/EditUserModal.tsx
import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  user: any;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  open,
  onClose,
  user,
}) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          margin: "auto",
          marginTop: "15%",
          width: "400px",
        }}
      >
        <Typography variant="h6">Editar Usuário</Typography>
        {user && (
          <>
            <TextField
              label="Nome"
              defaultValue={user.name}
              fullWidth
              margin="normal"
            />
            <TextField
              label="E-mail"
              defaultValue={user.email}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Papel"
              defaultValue={user.role}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Status"
              defaultValue={user.status}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ marginTop: 2 }}
            >
              Salvar
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default EditUserModal;
