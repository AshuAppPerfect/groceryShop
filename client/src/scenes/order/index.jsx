import Header from "../../components/Header";

import { Box, Button, Fab, IconButton, Tooltip } from "@mui/material";

import { MaterialReactTable } from "material-react-table";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Delete, Edit } from "@mui/icons-material";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import {
  MRT_EditActionButtons,
  // createRow,
  useMaterialReactTable,
} from "material-react-table";

import React, { useEffect, useMemo, useState, useContext } from "react";

import ProductModal from "./productModal";
import AddOrderModal from "./addOrderModal";
import CreateOrderModal from "./createOrderModal";
import { mkConfig, generateCsv, download } from "export-to-csv";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Order = () => {
  const paymentMethodList = ["Cash", "UPI", "Debit Card", "Credit Card"];
  const orderStatusList = ["Pending", "Filled", "Partial"];

  const [productModalOpenStatus, setProductModalOpenStatus] = useState(false);
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  const renderProductsList = (products) => (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          Product ID: {product.product_id}, Quantity: {product.quantity}
        </li>
      ))}
    </ul>
  );

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const getOrderProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/getorderproducts");
      const jsonData = await response.json();
      console.log(jsonData);

      const orders = [];
      let currentOrderId = -1;
      let order;

      for (const row of jsonData) {
        if (row.order_id !== currentOrderId) {
          order = {
            order_id: row.order_id,
            user_id: row.user_id,
            orderstatus: row.orderstatus,
            orderdate: row.orderdate,
            paymentmethod: row.paymentmethod,
            totalamount: row.totalamount,
            products: [],
          };
          orders.push(order);
          currentOrderId = row.order_id;
        }
        order.products.push({
          product_id: row.product_id,
          quantity: row.quantity,
        });
      }

      setOrders(orders);
    } catch (err) {
      console.log(JSON.stringify(err));
    }

    console.log("orders: ");
    console.log(orders);
    setLoading(false);
  };

  useEffect(() => {
    getOrderProducts();
  }, []);

  const orderCols = [
    {
      accessorKey: "order_id",
      header: "order_id ID",
      size: 60,
      enableEditing: false,
    },
    {
      accessorKey: "orderdate",
      header: "orderdate",
      type: "date",
      enableEditing: false,
      size: 140,
      muiEditTextFieldProps: {
        required: true,
      },
    },
    {
      accessorKey: "paymentmethod",
      header: "paymentmethod",
      editVariant: "select",
      editSelectOptions: paymentMethodList,
      muiEditTextFieldProps: {
        select: true,
        required: true,
      },
    },
    {
      accessorKey: "orderstatus",
      header: "orderstatus",
      editVariant: "select",
      editSelectOptions: orderStatusList,
      muiEditTextFieldProps: {
        select: true,
        required: true,
      },
    },
    {
      accessorKey: "totalamount",
      header: "totalamount",
      enableResizing: true,
      type: "number",
      muiEditTextFieldProps: {
        required: true,
      },
    },
  ];

  const handleDeleteRow = async (row) => {
    if (
      window.confirm(
        `Are you sure you want to delete this order ${row.getValue("order_id")}`
      )
    ) {
      console.log(row.original);
      const id = row.getValue("order_id");
      try {
        const deleteProduct = await fetch(
          `http://localhost:5000/deleteorder/${id}`,
          { method: "DELETE" }
        );
        if (deleteProduct.status === 200) {
          console.log("Product deleted");
        } else {
          console.log("Error deleting product");
        }
        getOrderProducts();
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    }
  };

  const handleSaveRowEdits = async ({ exitEditingMode, values }) => {
    values.order_id = parseInt(values.order_id);
    console.log(values);
    console.log("update request recieved");
    try {
      const response = await fetch("http://localhost:5000/editorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log(response);
      getOrderProducts();
    } catch (err) {
      console.log(JSON.stringify(err));
    }

    exitEditingMode();
  };

  const handleCreateOrder = async () => {
    setIsCreatingOrder(true);
  };

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/addproducts");

      const jsonData = await response.json();
      //console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
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
    const csv = generateCsv(csvConfig)(orders);
    download(csvConfig)(csv);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Orders" subtitle="Manage your orders" />
      </Box>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
              columns={orderCols}
              data={orders}
              createDisplayMode="modal"
              editingMode="modal"
              enableColumnOrdering
              enableEditing
              state={{ columnVisibility: { product_id: false } }}
              onEditingRowSave={handleSaveRowEdits}
              //onCreatingRowSave={handleSaveRowCreate}
              renderCreateRowDialogContent={({
                table,
                row,
                internalEditComponents,
              }) => (
                <>
                  <DialogTitle variant="h3">Add New Order</DialogTitle>
                  <DialogContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {internalEditComponents}{" "}
                    {/* or render custom edit components here */}
                  </DialogContent>
                  <DialogActions>
                    <MRT_EditActionButtons
                      variant="text"
                      table={table}
                      row={row}
                    />
                  </DialogActions>
                </>
              )}
              renderEditRowDialogContent={({
                table,
                row,
                internalEditComponents,
              }) => (
                <>
                  <DialogTitle variant="h3">Edit Order</DialogTitle>
                  <DialogContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    {internalEditComponents}{" "}
                    {/* or render custom edit components here */}
                  </DialogContent>
                  <DialogActions>
                    <MRT_EditActionButtons
                      variant="text"
                      table={table}
                      row={row}
                    />
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
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteRow(row)}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                  <ProductModal order={row.original} />
                </Box>
              )}
              renderTopToolbarCustomActions={({ table }) => (
                //<AddOrderModal/>
                <Box>
                  <Box>
                    <Button
                      color="secondary"
                      onClick={() => setOpenCreateModal(true)}
                      //onClick={() => handleCreateOrder}
                      //   onClick={() => {
                      //     table.setCreatingRow(true);
                      //   }}
                      variant="contained"
                    >
                      Add Order
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
          <CreateOrderModal
            open={openCreateModal}
            onClose={handleCloseCreateModal}
            products={products}
            getOrderProducts={getOrderProducts}
          />
        </div>
      )}
    </Box>
  );
};

export default Order;
