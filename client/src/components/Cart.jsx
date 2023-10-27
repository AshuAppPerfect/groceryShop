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


const Cart = () => {

    return (
        <Box>
            <div>
                welcome to cart
            </div>
            <div>
                <div> name</div>
                <div> incrementer decreenter</div>
                <div> dlete option</div>
            </div>

            <div> 
                total amount
            </div>

            <div>
                ORDER - post - refresh cart
            </div>
        </Box>
    )
}

export default Cart;