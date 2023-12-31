import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { customerData } from "../../data/mockData";
import Header from "../../components/Header";

const Customer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Contact No.",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Delivery Address",
      flex: 1,
    },
    {
      field: "totalPurchaseHistory",
      headerName: "Total Purchase Amt.",
      flex: 1,
    },
    
  ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">

             <Header title="Customers" subtitle="Get data of your customers" />

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
                    rows = {customerData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )

}
export default Customer;