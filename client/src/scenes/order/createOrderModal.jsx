import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CreateOrderModal = ({ open, onClose, products ,getOrderProducts}) => {
  const paymentMethods = ["Cash", "UPI", "Debit Card", "Credit Card"];
  const [paymentMethod, setPaymentMethod] = useState(["Cash"]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);

  const addProduct = (product) => {
    setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    setCartEmpty(false);
  };

  const removeProduct = (productId) => {
    const updatedList = selectedProducts.filter(
      (product) => product.product_id !== productId
    );
    setSelectedProducts(updatedList);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedList = selectedProducts.map((product) => {
      if (product.product_id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setSelectedProducts(updatedList);
  };

  const calculateTotalAmount = () => {
    const total = selectedProducts.reduce(
      (acc, product) => acc + product.sellingprice * product.quantity,
      0
    );
    setTotalAmount(total);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [selectedProducts]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);

  const handleSubmitOrder = async (event) => {
    event.preventDefault();
    console.log("order placement process started !!");
    try {
      const orderData = {
        user_id: 1,
        orderStatus: "Pending",
        orderDate: new Date().toISOString().slice(0, 10),
        paymentMethod: paymentMethod ,
        total_price: totalAmount,

        orderProducts: selectedProducts.map((product) => {
          return {
            product_id: product.product_id,
            quantity: product.quantity,
          };
        }),
      };

      const response = await fetch("http://localhost:5000/addorders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      console.log("order placed!! in frontend");
      getOrderProducts();
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Create Order</DialogTitle>
      <DialogContent>
        <div
          className="create-order-modal"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="left-side">
            {products.map((product) => (
              <div
                key={product.product_id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{product.product_name}</span>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    if (
                      selectedProducts.find(
                        (selectedProduct) =>
                          selectedProduct.product_id === product.product_id
                      )
                    ) {
                      // The product is in the cart, so render "Remove from Cart" button
                      removeProduct(product.product_id);
                    } else {
                      // The product is not in the cart, so render "Add to Cart" button
                      addProduct(product);
                    }
                  }}
                  style={{
                    backgroundColor: selectedProducts.find(
                      (selectedProduct) =>
                        selectedProduct.product_id === product.product_id
                    )
                      ? "#f44336"
                      : "#4caf50",
                  }}
                >
                  {selectedProducts.find(
                    (selectedProduct) =>
                      selectedProduct.product_id === product.product_id
                  )
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </Button>
              </div>
            ))}
          </div>
          <div>
            {cartEmpty ? (
              <Box>NO Items Yet</Box>
            ) : (
              <div>
                <div className="right-upper-side">
                  {selectedProducts.map((product) => (
                    <div
                      key={product.product_id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{product.product_name}</span>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() =>
                          updateQuantity(
                            product.product_id,
                            product.quantity - 1
                          )
                        }
                        style={{ backgroundColor: "#f44336" }}
                      >
                        <RemoveIcon />
                      </Button>
                      <span>{product.quantity}</span>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() =>
                          updateQuantity(
                            product.product_id,
                            product.quantity + 1
                          )
                        }
                        style={{ backgroundColor: "#4caf50" }}
                      >
                        <AddIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => removeProduct(product.product_id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="bottom-right">
                  <div>
                    <label>Select Payment Method:</label>
                    <select
                      value={paymentMethod}
                      onChange={handlePaymentMethodChange}
                    >
                      {paymentMethods.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                    <p>Selected Payment Method: {paymentMethod}</p>
                  </div>
                  <div className="total-amount">Total: ${totalAmount}</div>
                  <button
                    onClick={handleSubmitOrder}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderModal;
