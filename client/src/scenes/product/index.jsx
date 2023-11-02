import React, { useEffect, useMemo, useState, useContext } from "react";

import { MaterialReactTable } from "material-react-table";

import { Box, Button, Fab, IconButton, Tooltip } from "@mui/material";

import { Delete, Edit } from "@mui/icons-material";
import Header from "../../components/Header";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import {
  MRT_EditActionButtons,
  // createRow,
  useMaterialReactTable,
} from "material-react-table";

import { mkConfig, generateCsv, download } from "export-to-csv";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Product() {
  const statusList = ["In Stock", "low Stock", "Finished"];
  const typeList = [
    "All",
    "Fruit",
    "Dairy",
    "Bakery",
    "Vegetable",
    "Meat",
    "Grains",
    "Seafood",
    "Breakfast",
    "Condiments",
    "Beverages",
    "Sweets",
    "Snacks",
    "Personal Care",
    "Household",
  ];
  const [validationErrors, setValidationErrors] = useState({});

  const productCols = [
    {
      accessorKey: "product_id",
      header: "Product ID",
      size: 60,
      enableEditing: false,
    },
    {
      accessorKey: "product_name",
      header: "Product Name",
      type: "text",
      size: 140,
      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "costprice",
      header: "Cost Price",
      type: "number",
      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "sellingprice",
      header: "Selling Price",
      type: "number",

      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 140,
      enableResizing: true,
      type: "text",
      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "availablequantity",
      header: "Available Quantity",
      type: "number",
      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "inventorystatus",
      header: "Inventory Status",
      // type: "select",
      editVariant: "select",
      size: 140,
      editSelectOptions: statusList,
      muiEditTextFieldProps: {
        select: true,
        required: true,
      },
    },
    {
      accessorKey: "type",
      header: "Type",
      //type: "select",
      size: 140,
      editSelectOptions: typeList,
      muiEditTextFieldProps: {
        select: true,
        required: true,
      },
    },
  ];

  const [productsData, setProductsData] = useState([]);
  const [productAdded, setProductAdded] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setProductAdded(false);
  };

  const onClose = () => {
    setAddProductModalStatus(false);
  };

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/addproducts");

      const jsonData = await response.json();
      console.log(jsonData);
      setProductsData(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const [addProductModalStatus, setAddProductModalStatus] = useState(false);

  const handleSaveRowEdits = async ({ exitEditingMode, values }) => {
    values.product_id = parseInt(values.product_id);
    values.costprice = parseInt(values.costprice);
    values.sellingprice = parseInt(values.sellingprice);
    values.availablequantity = parseInt(values.availablequantity);
    console.log(values);
    const id = values.product_id;

    try {
      const response = await fetch("http://localhost:5000/editproducts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log(response);
      getProducts();
    } catch (err) {
      console.log(JSON.stringify(err));
    }

    exitEditingMode();
  };

  const handleSaveRowCreate = async ({ values, table }) => {
    values.costprice = parseInt(values.costprice);
    values.sellingprice = parseInt(values.sellingprice);
    values.availablequantity = parseInt(values.availablequantity);
    console.log(values);
    const id = values.product_id;
    try {
      const response = await fetch("http://localhost:5000/addproductsmodal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      setProductAdded(true);

      getProducts();
    } catch (err) {
      console.log(err);
    }
    table.setCreatingRow(null);
  };

  const handleDeleteRow = async (row) => {
    if (
      window.confirm(
        `Are you sure you want to delete Product ${row.getValue(
          "product_name"
        )}`
      )
    ) {
      console.log(row.original);
      const id = row.getValue("product_id");
      try {
        const deleteProduct = await fetch(
          `http://localhost:5000/addproducts/${id}`,
          { method: "DELETE" }
        );
        if (deleteProduct.status === 200) {
          console.log("Product deleted");
        } else {
          console.log("Error deleting product");
        }
        getProducts();
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };
  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(productsData);
    download(csvConfig)(csv);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle="Manage your inventory" />
      </Box>
      <div>
        <Snackbar
          open={productAdded}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Added Successfully !!
          </Alert>
        </Snackbar>
      </div>
      <Box>
        <MaterialReactTable
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={productCols}
          data={productsData}
          createDisplayMode="modal"
          editingMode="modal"
          enableColumnOrdering
          enableEditing
          state={{ columnVisibility: { product_id: false } }}
          onEditingRowSave={handleSaveRowEdits}
          onCreatingRowSave={handleSaveRowCreate}
          renderCreateRowDialogContent={({
            table,
            row,
            internalEditComponents,
          }) => (
            <>
              <DialogTitle variant="h3">Add New Product</DialogTitle>
              <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                {internalEditComponents}{" "}
                {/* or render custom edit components here */}
              </DialogContent>
              <DialogActions>
                <MRT_EditActionButtons variant="text" table={table} row={row} />
              </DialogActions>
            </>
          )}
          renderEditRowDialogContent={({
            table,
            row,
            internalEditComponents,
          }) => (
            <>
              <DialogTitle variant="h3">Edit Product</DialogTitle>
              <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                {internalEditComponents}{" "}
                {/* or render custom edit components here */}
              </DialogContent>
              <DialogActions>
                <MRT_EditActionButtons variant="text" table={table} row={row} />
              </DialogActions>
            </>
          )}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton
                  onClick={() => {
                    table.setEditingRow(row);
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={({ table }) => (
            <Box>
              <Box>
                {" "}
                <Button
                  color="secondary"
                  //onClick={() => setAddProductModalStatus(true)}
                  onClick={() => {
                    table.setCreatingRow(true);
                  }}
                  variant="contained"
                >
                  Add Product
                </Button>
              </Box>
               <Box
                    sx={{
                      display: "flex",
                      gap: "16px",
                      padding: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                      onClick={handleExportData}
                      startIcon={<FileDownloadIcon />}
                    >
                      Export All Data
                    </Button>
                    <Button
                      disabled={
                        table.getPrePaginationRowModel().rows.length === 0
                      }
                      //export all rows, including from the next page, (still respects filtering and sorting)
                      onClick={() =>
                        handleExportRows(table.getPrePaginationRowModel().rows)
                      }
                      startIcon={<FileDownloadIcon />}
                    >
                      Export All Rows
                    </Button>
                    <Button
                      disabled={table.getRowModel().rows.length === 0}
                      //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                      onClick={() => handleExportRows(table.getRowModel().rows)}
                      startIcon={<FileDownloadIcon />}
                    >
                      Export Page Rows
                    </Button>
                    
                  </Box>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}
export default Product;
