import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const DisplayCard = ({product, key, handleAddToCart}) => {
  
  return (
    <Box>
      <Card sx={{ minWidth: 275 ,marginBottom: "16px",}}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {product.product_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {product.type}
        </Typography>
        <Typography variant="body2">
          {product.description}         
        </Typography>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
      }}
    >
    <Paper elevation={3} style={{ width: '50px', height: '30px', borderRadius: '5px',display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>{product.sellingprice}</Paper>
    </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleAddToCart(product)} style={{
    border: '2px solid #007bff', // Change the border color as needed
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Adjust the shadow properties as needed
    transition: 'all 0.3s ease', // Add a smooth transition effect
    backgroundColor: '#007bff', // Additional button styles (you can customize these)
    color: 'white',
  }}>ADD TO CART</Button>
      </CardActions>
    </Card>
    </Box>
  );
};

export default DisplayCard;
