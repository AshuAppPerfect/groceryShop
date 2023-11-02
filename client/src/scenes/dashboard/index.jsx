import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Pie from "../charts/Pie";
import Line from "../charts/Line";
import Bar from "../charts/Bar";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box>
        {/* <div>
          <div>Order count: </div>
          <div>Order Delivered: </div>
          <div>Total Profit: </div>
          <div>Customer count: </div>
        </div> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{
            height: 400,
            width: 400,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
            {" "}
            <Pie />{" "}
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
            {" "}
            <Bar />{" "}
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
            {" "}
            <Line />{" "}
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;
