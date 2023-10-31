import { Box, Button, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridToolbar,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockProductData } from "../../data/mockData";
import Header from "../../components/Header";

const inventoryStatus = ['In Stock', 'low Stock', 'Finished'];

function EditToolbar(props) {
  
}


const Productprevious = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/addproducts");

      const jsonData = await response.json();
      console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  useEffect(() => {
    getProducts();
  }, [products]);




  // const columns = [
  //   { field: "id", headerName: "ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,

  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "type",
  //     headerName: "Type",
  //     flex: 1,
  //   },
  //   {
  //     field: "costPrice",
  //     headerName: "Cost",
  //     flex: 1,
  //   },
  //   {
  //     field: "sellingPrice",
  //     headerName: "Selling Price",
  //     flex: 1,
  //   },
  //   {
  //     field: "inventoryStatus",
  //     headerName: "Inventory Status",
  //     flex: 1,
  //     renderCell: ({ row: { inventoryStatus } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           p="5px"
  //           display="flex"
  //           justifyContent="center"
  //           backgroundColor={
  //             inventoryStatus === "In Stock"
  //               ? colors.greenAccent[600]
  //               : inventoryStatus === "Low Stock"
  //               ? colors.redAccent[500]
  //               : colors.greenAccent[700]
  //           }
  //           borderRadius="4px"
  //         >
  //           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
  //             {inventoryStatus}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  // ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle="Manage your inventory" />
      </Box>

      {/* <Box
        m="40px 0 0 0"
        height="75vh"
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
        }}
      >
        <DataGrid
          rows={mockProductData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box> */}
    </Box>
  );
};
export default Productprevious;
