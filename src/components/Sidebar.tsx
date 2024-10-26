// src/components/Sidebar.tsx
import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Home,
  Assessment,
  AddCircle,
  Settings,
  People,
  AccountCircle,
} from "@mui/icons-material";
import { useAuth } from "../provider/AuthProvider";

const Sidebar: React.FC = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const { logout } = useAuth();
  const toggleProfileMenu = () => {
    setOpenProfileMenu((prev) => !prev);
  };

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box
        sx={{
          width: 240,
          height: "100%",
          backgroundColor: "#2e7d32",
          color: "white",
        }}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          Menu
        </Typography>
        <List>
          {[
            { text: "Início", path: "/home", icon: <Home /> },
            {
              text: "Cadastrar Novo KPI",
              path: "/kpi-register",
              icon: <AddCircle />,
            },
            {
              text: "Gerar Relatório",
              path: "/generate-report",
              icon: <Assessment />,
            },
            {
              text: "Configurações de Alerta",
              path: "/alert-settings",
              icon: <Settings />,
            },
            {
              text: "Gerenciar Usuários",
              path: "/user-management",
              icon: <People />,
            },
          ].map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "inherit" }} />
            </ListItem>
          ))}

          <ListItem onClick={toggleProfileMenu} sx={{ cursor: "pointer" }}>
            <ListItemIcon sx={{ color: "inherit" }}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Perfil" sx={{ color: "inherit" }} />
          </ListItem>

          <Collapse in={openProfileMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                component={Link}
                to="/alterar-perfil"
                sx={{
                  cursor: "pointer",
                  pl: 4,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                <ListItemText
                  primary="Alterar Perfil"
                  sx={{ color: "inherit" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/login"
                sx={{
                  pl: 4,
                  cursor: "pointer",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                <ListItemText
                  primary="Logout"
                  sx={{ color: "inherit" }}
                  onClick={logout}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
