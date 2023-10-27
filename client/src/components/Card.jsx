import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const DisplayCard = (props) => {
  let addedProduct = props.addedProduct;
  let setAddedProduct = props.setAddedProduct;

  return (
    <Box>
      <Card sx={{ minWidth: 275 ,marginBottom: "16px",}}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {props.product.product_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {props.product.type}
        </Typography>
        <Typography variant="body2">
          {props.product.description}         
        </Typography>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
      }}
    >
    <Paper elevation={3} style={{ width: '50px', height: '30px', borderRadius: '5px',display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>{props.product.sellingprice}</Paper>
    </Box>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
      </CardActions>
    </Card>
    </Box>
  );
};

export default DisplayCard;
