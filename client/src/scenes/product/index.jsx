import React, { useEffect, useMemo, useState, useContext } from "react";

import { MaterialReactTable } from "material-react-table";

import { Box, Button, Fab, IconButton, Tooltip } from "@mui/material";

import { Delete, Edit } from "@mui/icons-material";
import Header from "../../components/Header";

import AddProductModal from "./AddProduct";

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
      size: 140,
      editSelectOptions: typeList,
      muiEditTextFieldProps: {
        select: true,
        required: true,
      },
    },
  ];

  const [productsData, setProductsData] = useState([]);

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
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle="Manage your inventory" />
      </Box>
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
          editingMode="modal"
          enableColumnOrdering
          enableEditing
          state={{ columnVisibility: { product_id: false } }}
          onEditingRowSave={handleSaveRowEdits}
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
          renderTopToolbarCustomActions={() => (
            <Button
              color="secondary"
              onClick={() => setAddProductModalStatus(true)}
              variant="contained"
            >
              Add Product
            </Button>
          )}
        />
        <AddProductModal
        columns = {productCols}
        state = {{columnVisibility: {product_id : false}}}
        open={addProductModalStatus}
        onClose={()=>setAddProductModalStatus(false)}
        />
      </Box>
    </Box>
  );
}
export default Product;
