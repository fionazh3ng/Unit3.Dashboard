import { mockTransactions } from "../mockTransactions";
import {
  Toolbar,
  Divider,
  Box,
  Stack,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import MoneyIcon from "@mui/icons-material/Money";
import CustomizedTable from "./StickyHeadTable";

const DemoPaper = styled(Paper)(() => ({
  width: 180,
  height: 120,
  textAlign: "center",
  margin: 20,
}));

const RevenueGenerated = () => {
  let revenue = 0;
  for (let i = 0; i < mockTransactions.length; i++) {
    const currentCost = Number(mockTransactions[i].cost);
    revenue += currentCost;
  }
  return revenue.toFixed(2);
};

const CountUniqueUsers = (transactions) => {
  const uniqueUserNames = new Set(
    transactions.map((transaction) => transaction.user)
  );
  return uniqueUserNames.size;
};

const TotalUsers = CountUniqueUsers(mockTransactions);

export default function DataDisplay() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Stack direction="row" spacing={5}>
        <DemoPaper square={false}>
          <PointOfSaleIcon />
          <Typography varient="h6">{mockTransactions.length}</Typography>
          <Typography variant="h6">Sales Obtained</Typography>
        </DemoPaper>
        <DemoPaper square>
          <PersonAddIcon />
          <Typography varient="h6">{TotalUsers}</Typography>
          <Typography variant="h6">New Clients</Typography>
        </DemoPaper>
        <DemoPaper square>
          <TrafficIcon />
          <Typography varient="h6">{TotalUsers}</Typography>
          <Typography variant="h6">Traffic Received</Typography>
        </DemoPaper>
      </Stack>
      <Divider />
      <DemoPaper square>
        <MoneyIcon />
        <Typography varient="h6">
          $<RevenueGenerated />
        </Typography>
        <Typography variant="h6">Revenue Generated</Typography>
      </DemoPaper>
      <CustomizedTable />
    </Box>
  );
}
