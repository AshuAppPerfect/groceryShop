import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { orderData } from "../../data/mockData";
import Header from "../../components/Header";

const Order = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
    { field: "id", headerName: "Order ID" },
    {
      field: "customerId",
      headerName: "Customer ID",
      flex: 1,
    //   cellClassName: "name-column--cell",
    },
    {
      field: "orderAmount",
      headerName: "Amount",
      flex: 1,
      type: 'number',
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          Rs {params.row.orderAmount}
        </Typography>)
    },
    {
        field: "orderDate",
        headerName: "Date",
        flex:1,
        //type: 'date',
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      flex: 1,
    },
    {
      field: "orderStatus",
      headerName: "Order Status",
      flex: 1,
      renderCell: ({ row: { orderStatus } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              orderStatus === "filled"
                ? colors.greenAccent[600]
                : orderStatus === "pending"
                ? colors.redAccent[500]
                : colors.blueAccent[500]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {orderStatus}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "orderItems",
      headerName: "Order Items",
      flex: 1,
      renderCell: (params) => (
        <ul className="flex">
            {params.value.map((item , index) =>(
                <li key={index}>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        ItemId = {item.productId}  quantity={item.quantity}
                    </Typography>
                </li>
            ))}
        </ul>
      )
    },
    
  ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">

             <Header title="Orders" subtitle="Manage your orders" />

            </Box>
            
            <Box  m="40px 0 0 0" height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                border: "none",
                },
                "& .MuiDataGrid-cell": {
                borderBottom: "none",
                },
                "& .name-column--cell": {
                color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
                "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
          },
            }}>
                <DataGrid
                    rows = {orderData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )

}
export default Order;