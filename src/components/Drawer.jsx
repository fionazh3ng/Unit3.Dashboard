import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import MoneyIcon from "@mui/icons-material/Money";
import CustomizedTable from "./StickyHeadTable";

const drawerWidth = 240;

const DemoPaper = styled(Paper)(() => ({
  width: 180,
  height: 120,
  textAlign: "center",
}));

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
          <Typography variant="p" noWrap component="div">
            Welcome to your dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <WidgetsIcon />
        <Box>
          <Typography variant="h3" component="div">
            King's Restaurant
          </Typography>
          <Typography variant="p" component="div">
            Dashboard Owner
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem>
            <Chip
              icon={<HomeOutlinedIcon color="action" fontSize="medium" />}
              label={<Typography variant="h6">Dashboard</Typography>}
            />
          </ListItem>
          <ListItem>
            <Chip
              icon={
                <HelpOutlineOutlinedIcon color="action" fontSize="medium" />
              }
              label={<Typography variant="h6">FAQ Page</Typography>}
            />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Stack direction="row" spacing={5}>
          <DemoPaper square={false}>
            <PointOfSaleIcon />
            Sales Obtained
          </DemoPaper>
          <DemoPaper square>
            <PersonAddIcon />
            New Clients
          </DemoPaper>
          <DemoPaper square>
            <TrafficIcon />
            Traffic Received
          </DemoPaper>
        </Stack>
        <Divider />
        <DemoPaper square>
          <MoneyIcon />
          Revenue Generated
        </DemoPaper>
        <CustomizedTable />
      </Box>
    </Box>
  );
}
