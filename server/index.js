const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a product

app.post("/addproducts", async (req, res) => {
  try {
    console.log(req.body);
    //const product_id = req.body["product_id"];
    const productname = req.body.productName;
    const costprice = req.body.costPrice * 1;
    const sellingprice = req.body.sellingPrice * 1;
    const description = req.body.description;
    const availablequantity = req.body.availableQuantity * 1;
    const inventorystatus = req.body.inventoryStatus.toString();
    const type = req.body.type;

    const insertProduct = `INSERT INTO productdetails (product_name, costprice, sellingprice, description, availablequantity, inventorystatus,type) VALUES ('${productname}','${costprice}' ,'${sellingprice}' ,'${description}' , '${availablequantity}', '${inventorystatus}' , '${type}');`;
    console.log("insertProduct", insertProduct);

    const newProduct = await pool.query(insertProduct);
    console.log(newProduct);
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//get all products

app.get("/addproducts", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM productdetails");
    res.json(allProducts.rows);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.send(err);
  }
});

//get a specific product

app.get("/addproducts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      `SELECT * FROM productdetails WHERE product_id = '${id}' ;`
    );

    res.json(product.rows[0]);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.send(err);
  }
});

app.put("/editproducts", async(req,res) => {
  try{
    const id = req.body["product_id"];
    const productname = req.body["product_name"];
    const costprice = req.body["costprice"];
    const sellingprice = req.body["sellingprice"];
    const description = req.body["description"];
    const availablequantity = req.body["availablequantity"];
    const inventorystatus = req.body["inventorystatus"];
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
        id,
      ]  
    );

     res.json(`product '${id}' is updated`);

  }
  catch(err){
      console.log(JSON.stringify(err));
    res.send(err);
  }
});

//edit a product FORM

app.put("/addproducts/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
        id,
      ]
    );

    res.json(`product '${id}' is updated`);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.send(err);
  }
});

//delete a product

app.delete("/addproducts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM productdetails WHERE product_id = $1;",
      [id]
    );

    res.json("product was deleted!");
  } catch (err) {
    console.log(JSON.stringify(err));
    res.send(err);
  }
});

app.post("/addorders", async (req, res) => {
  try {
    console.log(req.body);

    //const orderData = req.body;
    const user_id = req.body.user_id;
    const orderstatus = req.body.orderStatus;
    const orderdate = req.body.orderDate;
    const paymentmethod = req.body.paymentMethod;
    const total_amount = req.body.total_price;

    const insertOrder = `INSERT INTO orderdetails (user_id, orderstatus, orderdate, paymentmethod, totalamount) VALUES ('${user_id}' , '${orderstatus}' , '${orderdate}', '${paymentmethod}', '${total_amount}');`;

    console.log("insert order:", insertOrder);

    const newOrder = await pool.query(insertOrder);
    console.log(newOrder);

    const selectOrder = `SELECT order_id from orderdetails ORDER BY order_id DESC LIMIT 1;`

    const selectOrd = await pool.query(selectOrder);

    const order_id = selectOrd.rows[0].order_id;
    const orderProducts = req.body.orderProducts;
    for (const product of orderProducts) {
      const product_id = product.product_id;
      const quantity = product.quantity;
      const productQuery = `INSERT INTO orderproducts (order_id, product_id, quantity)
            VALUES ('${order_id}', '${product_id}', '${quantity}');`;
      console.log("insert product:", productQuery);
      await pool.query(productQuery);
    }
    res.json(newOrder);

  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//amount payment method query
app.get("/paymentquery", async (req,res) =>{
  try{
    const linequery = await pool.query("SELECT SUM(totalamount), paymentmethod FROM orderdetails GROUP BY paymentmethod ; ");
    res.json(linequery.rows);
  }
  catch (err){
    console.log(err);
    res.send(err);
  }
})

// product order query
app.get("/orderquery" , async(req, res) => {
  try {
    const selectquery =
      "SELECT pd.product_name, COUNT(op.order_id) AS times_ordered FROM ProductDetails pd LEFT JOIN orderProducts op ON pd.product_id = op.product_id GROUP BY pd.product_name HAVING COUNT(op.order_id) >= 1 ORDER BY times_ordered DESC;";
    const productquery = await pool.query(selectquery);
    res.json(productquery.rows);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
})

//order date query

app.get("/datequery", async (req, res) => {
  try {
    const datequery = await pool.query(
      "SELECT orderdate, SUM(totalamount) as total_sales FROM orderdetails GROUP BY orderdate ORDER BY orderdate;"
    );
    res.json(datequery.rows);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


app.listen(5000, () => {
  console.log("server is started at port 5000");
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
