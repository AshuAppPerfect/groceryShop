import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Card,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import EditProduct from "../../components/editProduct";

import React, { useState, useEffect } from "react";
import { tokens } from "../../theme";

import { Dvr } from "@mui/icons-material";

const InventoryStatus = ["In Stock", "low stock", "Finished"];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  //const [editingProduct, setEditingProduct] = useState(null);
  //const [editOpen, setEditOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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

  
  const [formData, setFormData] = useState({
    name: "",
    costPrice: "",
    sellingPrice: "",
    description: "",
    availableQuantity: "",
    inventoryStatus: "",
    type: "",
  });

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      //   console.log(prevFormData);
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        productName: formData.name,
        costPrice: formData.costPrice,
        sellingPrice: formData.sellingPrice,
        description: formData.description,
        availableQuantity: formData.availableQuantity,
        inventoryStatus: formData.inventoryStatus,
        type: formData.type,
      };
      const response = await fetch("http://localhost:5000/addproducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      setProducts([...products, formData]);
      setFormData({
        name: "",
        costPrice: "",
        sellingPrice: "",
        description: "",
        availableQuantity: "",
        inventoryStatus: "",
        type: "",
      });
      setFormOpen(false);
      console.log("successfully added: ");
      console.log(JSON.stringify(formData));
    } catch (err) {
      console.log(JSON.stringify(err));
      //res.send(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/addproducts/${id}`,
        { method: "DELETE" }
      );
      if (deleteProduct.status === 200) {
        console.log("Product deleted");
        setProducts(products.filter((product) => product.product_id !== id));
      } else {
        console.log("Error deleting product");
      }
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle="Manage your products" />
      </Box>
      <div>
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          Add Product
        </Button>
        <br />
        {formOpen && (
          <div>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: "300px", margin: "10px" }}
            />
            <br />
            <TextField
              label="Cost Price"
              name="costPrice"
              type="number"
              value={formData.costPrice}
              onChange={handleInputChange}
              style={{ width: "150px", margin: "10px" }}
            />
            <TextField
              label="Selling Price"
              name="sellingPrice"
              type="number"
              value={formData.sellingPrice}
              onChange={handleInputChange}
              style={{ width: "150px", margin: "10px" }}
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={{ width: "300px", margin: "10px" }}
            />
            <TextField
              label="Available Quantity"
              name="availableQuantity"
              type="number"
              value={formData.availableQuantity}
              onChange={handleInputChange}
              style={{ width: "300px", margin: "10px" }}
            />
            <FormControl style={{ width: "300px", margin: "10px" }}>
              <InputLabel width="100px">Inventory Status</InputLabel>
              <Select
                name="inventoryStatus"
                value={formData.inventoryStatus}
                onChange={handleInputChange}
              >
                {InventoryStatus.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              style={{ width: "300px", margin: "10px" }}
            />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="contained" onClick={() => setFormOpen(false)}>
                Close Form
              </Button>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products.map((product, index) => (
            <Card
              key={product.product_id}
              style={{ width: "300px", margin: "10px" }}
            >
              <CardContent>
                <div>
                  <span>Name: {product.product_name}</span> <br />
                  <span>Cost Price: {product.costprice}</span>
                  <br />
                  <span>Selling Price: {product.sellingprice}</span>
                  <br />
                  <span>Description: {product.description}</span>
                  <br />
                  <span>Available Quantity: {product.availablequantity}</span>
                  <br />
                  <span>Inventory Status: {product.inventorystatus}</span>
                  <br />
                  <span>Type: {product.type}</span>
                  <br />
                </div>
              </CardContent>
              <CardActions>
                {/* <Button
                  variant="outlined"
                  onClick={() => <EditProduct product={product}/>}
                >
                  Edit
                </Button> */}
                <EditProduct product={product}/>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(product.product_id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ProductPage;
