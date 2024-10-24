// src/components/Sidebar.tsx
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const menuItems = [
    { text: 'Início', path: '/home' },
    { text: 'Cadastrar Novo KPI', path: '/kpi-register' },
    { text: 'Gerar Relatório', path: '/generate-report' },
    { text: 'Configurações de Alerta', path: '/alert-settings' },
    { text: 'Logout', path: '', onClick: onLogout }, // Adiciona o item de Logout
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box sx={{ width: 240, height: '100%', backgroundColor: '#1976d2', color: 'white' }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Menu
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={item.onClick ? 'div' : Link}
              to={item.path}
              onClick={item.onClick}
              sx={{ cursor: 'pointer'  }} 
            >
              <ListItemText primary={item.text} sx={{ color: 'white' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
