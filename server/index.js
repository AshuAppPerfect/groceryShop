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
        const productname = req.body.productName;
        const costprice = (req.body.costPrice)*1;
        const sellingprice = (req.body.sellingPrice)*1;
        const description = req.body.description;
        const availablequantity = (req.body.availableQuantity)*1;
        const inventorystatus = req.body.inventoryStatus.toString();
        const type = req.body.type;  

        const insertProduct = `INSERT INTO productdetails (product_name, costprice, sellingprice, description, availablequantity, inventorystatus,type) VALUES ('${productname}','${costprice}' ,'${sellingprice}' ,'${description}' , '${availablequantity}', '${inventorystatus}' , '${type}');`;
        console.log('insertProduct', insertProduct);

        const newProduct = await pool.query(insertProduct);
        console.log(newProduct)
        res.json(newProduct);
    }
    catch (err){
        console.log(err);
        res.send(err)
    }
});


//get all products

app.get("/addproducts", async(req, res) => {
    try{
        const allProducts = await pool.query("SELECT * FROM productdetails");
        res.json(allProducts.rows);
    }
    catch(err){
        console.log(JSON.stringify(err));
        res.send(err)
    }
})


//get a specific product

app.get("/addproducts/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const product = await pool.query(`SELECT * FROM productdetails WHERE product_id = '${id}' ;`);

        res.json(product.rows[0]);
    }
    catch(err){
        console.log(JSON.stringify(err));
        res.send(err)
    }
})

//edit a product

app.put("/addproducts/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const productname = req.body["productName"];
        const costprice = req.body["costPrice"];
        const sellingprice = req.body["sellingPrice"];
        const description = req.body["description"];
        const availablequantity = req.body["availableQuantity"];
        const inventorystatus = req.body["inventoryStatus"];
        const type = req.body["type"];

        const updateProduct = await pool.query(
          "UPDATE productdetails SET product_name = $1, costprice = $2, sellingprice = $3, description = $4, availablequantity = $5, inventorystatus = $6, type = $7 WHERE product_id=$8 ;",
          [
            productname,
            costprice,
            sellingprice,
            description,
            availablequantity,
            inventorystatus,
            type,
            id
          ]
        );

        res.json(`product '${id}' is updated`);

    }
    catch(err){
        console.log(JSON.stringify(err));
        res.send(err)
    }
})

//delete a product

app.delete("/addproducts/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const deleteProduct = await pool.query("DELETE FROM productdetails WHERE product_id = $1;", [id]);

        res.json("product was deleted!");
    }
    catch(err){
        console.log(JSON.stringify(err));
        res.send(err)
    }
})

app.listen(5000, () => {
    console.log('server is started at port 5000');
});














// {
//     "productName": "Bananas",
//     "costPrice": "50",
//     "sellingPrice": "100",
//     "description": "Ripe and ready to eat bananas.",
//     "availableQuantity": "20",
//     "inventoryStatus": "low Stock",
//     "type": "Fruit"
// }