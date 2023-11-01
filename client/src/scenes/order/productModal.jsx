import Header from "../../components/Header";

import { Box, Button, Fab, IconButton, Tooltip } from "@mui/material";

import { MaterialReactTable } from "material-react-table";

const ProductModal = (order) => {
  console.log(order);
  const products = order.order.products;
  if (!Array.isArray(products)) {
    return (
      <div>
        <p>No products available for this order.</p>
      </div>
    );
  }
  return (
    <Box>
      <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target={`#id${order.order_id}`}
        //onClick={() => setDescription(product.description)}
      >
        See products
      </button>

      <div class="modal" id={`id${order.order_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">View Order</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //onClick={() => setDescription(product.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
                Order_id : {order.order.order_id}
                                <br></br>
                Total Amount : {order.order.totalamount}
                                <br></br>
                Pyament Method : {order.order.paymentmethod}
                <br></br>
                <br></br>
              <div>
                Products ordered:
                <ul>
                  {products.map((product, index) => (
                    <li key={index}>
                      Product ID: {product.product_id}, Quantity:{" "}
                      {product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProductModal;
