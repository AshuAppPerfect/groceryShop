import React, { useState } from "react";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
	TextField,
} from "@mui/material";

function AddProductModal(){

    const [values, setValues] = useState({
        product_name :"",
        costprice : 0,
        sellingprice: 0,
        inventorystatus: "",
        availablequantity :0,
        type:"",
        description:"",
    });

    async function addNewProductHandler(){
        console.log()
    }

    return (
        <div>add modal</div>
    )
}

export default AddProductModal;