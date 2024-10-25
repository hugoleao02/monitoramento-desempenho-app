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
  id?: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit }) => {
  return (
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
            <TableCell>{user.status}</TableCell>
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
};

export default UserTable;
