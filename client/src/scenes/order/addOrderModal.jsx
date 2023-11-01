import { Box, Button, Fab, IconButton, Tooltip } from "@mui/material";

const AddOrderModal = () => {
  return (
    <Box>
      <Button
      color="secondary"
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#orderModal"
        //data-target={`#id${order.order_id}`}
        //onClick={() => setDescription(product.description)}
      >
        Add Order now
      </Button>
      <div class="modal" id="orderModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Order</h4>
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
                this is modal body
            </div>

            <div class="modal-footer">
              <Button data-dismiss="modal">
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </Box>
  );
};

export default AddOrderModal;
