import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  //ExpandMoreIcon,
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

import CartItem from "./CartItem";
import { useState, useEffect } from "react";

const Cart = ({
  cartProducts,
  addToCart,
  removeFromCart,
  onSubmitOrder,
  total,
  setTotal,
  paymentMethod,
  setPaymentMethod,
}) => {
  //    const [total , setTotal] = useState(0);
  const paymentMethods = ["Cash", "UPI", "Debit Card", "Credit Card"];

  const calculateTotal = () => {
    let newTotal = 0;
    for (const product of cartProducts) {
      newTotal += product.amount * product.sellingprice;
    }
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };


  // const calculateTotal = (cartProducts) =>
  // cartProducts.reduce((acc, product) => acc + product.amount * product.selling_price, 0);
  // useEffect(()=>{
  //     calculateTotal();
  // },[cartProducts])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "500px",
        margin: "20px",
      }}
    >
      <div>welcome to cart</div>
      {cartProducts.length === 0 ? <p>NO items in yout cart.</p> : null}

      {cartProducts.map((product) => {
        return (
          <CartItem
            key={product.product_id}
            id={product.product_id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}

      {/* <div>
                <div> name</div>
                <div> incrementer decreenter</div>
                <div> dlete option</div>
            </div> */}
      <div>
        <label>Select Payment Method:</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          {paymentMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <p>Selected Payment Method: {paymentMethod}</p>
      </div>

      <div>
        <h2>Total : {total}</h2>
        <Button onClick={onSubmitOrder}>Order Now </Button>
      </div>

      {/* <div>
                ORDER - post - refresh cart
            </div> */}
    </div>
  );
};

export default Cart;
