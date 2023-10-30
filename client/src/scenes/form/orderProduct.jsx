import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Drawer,
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

import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
//import Drawer from "@material-ui/core/Drawer";
import Badge from "@mui/material/Badge";
//import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";

import CloseIcon from "@mui/icons-material";

import React, { useState, useEffect } from "react";
//import { useQuery } from "react-query";
import { tokens } from "../../theme";

import { Dvr } from "@mui/icons-material";
import Filter from "../../components/Filter";
import { filterData } from "../../data/filter";
import Cart from "../../components/Cart";

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(["Cash"]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/addproducts");

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  //const { data, isLoading, error } = useQuery("products", getProducts);

  const getTotalItems = (items) => items.reduce((acc, item) => item.amount, 0);

  const handleAddToCart = (clickedProduct) => {
    //console.log(clickedProduct);
    setCartProducts((prev) => {
      const isItemInCart = prev.find(
        (product) => product.product_id === clickedProduct.product_id
      );

      if (isItemInCart) {
        return prev.map((product) =>
          product.product_id === clickedProduct.product_id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      }
      console.log("hello");

      return [...prev, { ...clickedProduct, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    console.log(id);
    let ans = cartProducts.reduce((acc, product) => {
      console.log("data");
      console.log(product, acc);
      if (product.product_id === id) {
        if (product.amount === 1) return acc;
        console.log("iuhfgeiohogi");
        return [...acc, { ...product, amount: product.amount - 1 }];
      } else {
        return [...acc, product];
      }
    }, []);
    console.log(ans);
    setCartProducts(ans);
  };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOrderPlaced(false);
  };

  const handleSubmitOrder = async (event) => {
    event.preventDefault();
    console.log("callled");
    try {
      const orderData = {
        user_id: 1,
        orderStatus: "Pending",
        orderDate: new Date().toISOString().slice(0, 10),
        paymentMethod: paymentMethod,
        total_price: total,

        orderProducts: cartProducts.map((product) => {
          return {
            product_id: product.product_id,
            quantity: product.amount,
          };
        }),
      };

      const response = await fetch("http://localhost:5000/addorders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      console.log("order placed!! in frontend");

      // <Alert severity="success">Order placed succesfully!</Alert>;

      console.log(response);
      setCartOpen(false);
      setOrderPlaced(true);
      setCartProducts([]);

      //setOrderPlaced(false);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  //if (isLoading) return <LinearProgress />;
  //if (error) return <div> something went wrong</div>;

  return (
    <Box m="20px">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Order" subtitle="Manage your order" />
        </Box>
        <Box m="20px">Go to Cart</Box>
      </div>

      <div>
        <Snackbar
          open={orderPlaced}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Order placed successfully
          </Alert>
        </Snackbar>
      </div>

      <div>
        <Box display="flex" alignItems="center">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              aria-controls="filter-panel-content"
              id="filter-panel-header"
            >
              <Typography>Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Filter
                filterData={filterData}
                category={category}
                setCategory={setCategory}
              />
            </AccordionDetails>
          </Accordion>
          <Box m="20px">
            <Drawer
              anchor="right"
              open={cartOpen}
              onClose={() => setCartOpen(false)}
            >
              <Cart
                cartProducts={cartProducts}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                onSubmitOrder={handleSubmitOrder}
                total={total}
                setTotal={setTotal}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </Drawer>
            <button onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartProducts)} color="error">
                <AddShoppingCartOutlinedIcon />
              </Badge>
            </button>
          </Box>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {laoding ? (
          <CircularProgress />
        ) : (
          <Cards
            products={products}
            category={category}
            handleAddToCart={handleAddToCart}
          />
          //   <div>
          //     {products.map((product) => {
          //       return (
          //         <Grid product key={product.product_id} xs={12} sm={4}>
          //           <Item product={product} handleAddToCart={handleAddToCart} />
          //         </Grid>
          //       );
          //     })}
          //   </div>
        )}
      </Box>
    </Box>
  );
};

export default OrderPage;
