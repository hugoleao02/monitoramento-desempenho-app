import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: "#f0f2f5",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
