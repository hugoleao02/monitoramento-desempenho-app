// src/pages/UserManagementPage/UserTable.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

interface User {
  id?: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Nome</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Papel</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.active ? "Ativo" : "Inativo"}</TableCell>
          <TableCell>
            <IconButton onClick={() => onEdit(user)}>
              <Edit />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UserTable;
