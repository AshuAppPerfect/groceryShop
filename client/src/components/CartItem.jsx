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

const CartItem = ({id, product, addToCart, removeFromCart }) => {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Arial, Helvetica, sans-serif",
        borderBottom: "1px solid lightblue",
        paddingBottom: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3> {product.product_name}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p> Price: ${product.sellingprice}</p>
          <p>Total : ${product.amount * product.sellingprice}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => removeFromCart(id)}
          >
            {" "}
            -{" "}
          </Button>
          <p>{product.amount}</p>
          <Button
            size="small"
            variant="contained"
            onClick={() => addToCart(product)}
          >
            {" "}
            +{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
