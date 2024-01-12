import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  Box,
  Chip,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DataDisplay from "./DataDisplay";

const drawerWidth = 300;

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
      <DataDisplay />
    </Box>
  );
}
