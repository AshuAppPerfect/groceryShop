import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import {mockProductData}  from "../../data/mockData";
import React, { useState } from "react";
import { tokens } from "../../theme";
import Products from "../../components/Products"
import { Dvr } from "@mui/icons-material";

const ProductForm = () => {
    const [products, setProducts] = useState(mockProductData);

    function removeProduct(id){
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">

             <Header title="Products" subtitle="Manage your products" />

            </Box>


            
            <Box>
                ADD NEW PRODUCT
            </Box>
            <Box>
                <div className="app">
                    <Products products={products} removeProducts={removeProduct}/>
                </div>
            </Box>
        </Box>
        
    );
}

export default ProductForm;