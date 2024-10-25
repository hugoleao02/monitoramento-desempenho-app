// src/components/Sidebar.tsx
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box
        sx={{
          width: 240,
          height: "100%",
          backgroundColor: "#1976d2", // Cor de fundo da sidebar
          color: "white", // Cor do texto
        }}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          Menu
        </Typography>
        <List>
          {[
            { text: "Início", path: "/home" },
            { text: "Cadastrar Novo KPI", path: "/kpi-register" },
            { text: "Gerar Relatório", path: "/generate-report" },
            { text: "Configurações de Alerta", path: "/alert-settings" },
            { text: "Gerenciar Usuários", path: "/user-management" },
            { text: "Logout", path: "/login" }, // Redireciona para a página de login
          ].map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                cursor: "pointer",
                color: "white", // Garante que o texto seja branco
                "&:hover": {
                  backgroundColor: "#1565c0", // Cor de fundo ao passar o mouse
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{ color: "inherit" }} // Usa 'inherit' para herdar a cor branca
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
