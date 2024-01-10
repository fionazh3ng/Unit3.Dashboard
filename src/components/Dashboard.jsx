import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Box,
} from "@mui/material";
import { Home } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Home />
          <Typography variant="h6">King's Restaurant</Typography>
          <Typography variant="p">Dashboard Owner</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container></Container>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
