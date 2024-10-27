import React from "react";
import { User } from "../../interfaces/User";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
  onToggleActive: (userId: string, active: boolean) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  onEdit,
  onDelete,
  onToggleActive,
}) => {
  return (
    <TableContainer
      component={Paper}
      className="max-w-full mt-4 shadow-lg rounded-lg overflow-hidden"
    >
      <Table className="min-w-full">
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell className="font-bold">Nome</TableCell>
            <TableCell className="font-bold">Email</TableCell>
            <TableCell className="font-bold">Ativo</TableCell>
            <TableCell className="font-bold">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Switch
                  checked={user.active}
                  onChange={() =>
                    onToggleActive(user.id as string, !user.active)
                  }
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(user)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => onDelete(user.id as string)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
