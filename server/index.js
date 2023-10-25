const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); 

//ROUTES

//create a product

app.post("/addproducts" , async(req, res) => {
    try{
        console.log(req.body);
        //const product_id = req.body["product_id"];
        const productname = req.body["productName"];
        const costprice = req.body["costPrice"];
        const sellingprice = req.body["sellingPrice"];
        const description = req.body["description"];
        const availablequantity = req.body["availableQuantity"];
        const inventorystatus = req.body["inventoryStatus"];
        const type = req.body["type"];
        

        const insertProduct = `INSERT INTO productdetails (product_name, costprice, sellingprice, description, availablequantity, inventorystatus,type) VALUES ('${productname}','${costprice}' ,'${sellingprice}' ,'${description}' , '${availablequantity}', '${inventorystatus}' , '${type}');`;

        const newProduct = await pool.query(insertProduct);

        res.json(newProduct);
    }
    catch (err){
        console.log(JSON.stringify(err));
        res.send(err)
    }
});

// CREATE TABLE ProductDetails (
//     product_id SERIAL PRIMARY KEY,
//     product_name VARCHAR(30) NOT NULL,
//     costPrice INT NOT NULL,
//     sellingPrice INT NOT NULL,
//     description VARCHAR(50),
//     availableQuantity INT NOT NULL,
//     inventoryStatus INVENTORYSTATUSCUSTOM DEFAULT ('In Stock')
// );

//get all products

//edit a product

//delete a product

app.listen(5000, () => {
    console.log('server is started at port 5000');
});