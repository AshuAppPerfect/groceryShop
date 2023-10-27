import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
//import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
//import { AddShoppingCart } from "@material-ui/icons";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { tokens } from "../../theme";

import { Dvr } from "@mui/icons-material";
import Filter from "../../components/Filter";
import { filterData } from "../../data/filter";

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [cartOpen , setCartOpen] = useState(false);
  const [cartProducts , setCartProducts]  = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/addproducts");

      const jsonData = await response.json();
      console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);


  return (
    <Box m="20px">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Order" subtitle="Manage your order" />
        </Box>
        <Box m="20px">Go to Cart</Box>
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
            <button> Go to cart </button>
        </Box>
        </Box>
      </div>

      <Box sx={{ display: "flex" ,justifyContent: "center",
        alignItems: "center",height: "100%", }}>
            {
            laoding ? (
              <CircularProgress />
            ) : (
              <Cards products={products} category={category} />
            )
            }     
      </Box>
    </Box>
  );
};

export default OrderPage;
