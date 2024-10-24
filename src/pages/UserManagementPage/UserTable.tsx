// src/pages/UserManagementPage/UserTable.tsx
import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserTableProps {
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ onEdit }) => {
  const [filter, setFilter] = React.useState('');
  const users: User[] = [
    { id: 1, name: 'Usuário 1', email: 'usuario1@example.com', role: 'Administrador', status: 'Ativo' },
    { id: 2, name: 'Usuário 2', email: 'usuario2@example.com', role: 'Usuário', status: 'Inativo' },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filter.toLowerCase()) || 
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <TableContainer>
      <TextField
        variant="outlined"
        label="Filtrar por nome ou e-mail"
        onChange={(e) => setFilter(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Papel</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(user)}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
