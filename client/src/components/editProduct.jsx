import React, { Fragment, useState } from "react";

const EditProduct = ({ product }) => {
  const [editData, setEditData] = useState({
    productName: product.product_name,
    costPrice: product.costprice,
    sellingPrice: product.sellingprice,
    description: product.description,
    availableQuantity: product.availablequantity,
    inventoryStatus: product.inventorystatus,
    type: product.type,
  });

  const clearEditData = ({ product }) => {
    setEditData({
      productName: product.product_name,
      costPrice: product.costprice,
      sellingPrice: product.sellingprice,
      description: product.description,
      availableQuantity: product.availablequantity,
      inventoryStatus: product.inventorystatus,
      type: product.type,
    });
  };

  //edit description function

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      //const body = { description };
      const response = await fetch(
        `http://localhost:5000/addproducts/${product.product_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      if (response.status === 200) {
        console.log("Product updated successfully.");
        window.location = "/";
        // You may want to handle success here, e.g., close the modal
      } else {
        console.log("Failed to update the product.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${product.product_id}`}
        //onClick={() => setDescription(product.description)}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div class="modal" id={`id${product.product_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Product</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //onClick={() => setDescription(product.description)}
              >
                &times;
              </button>
            </div>

            {/* <div class="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={editData.productName}
                onChange={(e) =>
                  setEditData({ ...editData, productName: e.target.value })
                }
              />
              <input
                type="number"
                className="form-control"
                placeholder="Cost Price"
                value={editData.costPrice}
                onChange={(e) =>
                  setEditData({ ...editData, costPrice: e.target.value })
                }
              />
              <input
                type="number"
                className="form-control"
                placeholder="Selling Price"
                value={editData.sellingPrice}
                onChange={(e) =>
                  setEditData({ ...editData, sellingPrice: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
              />
              <input
                type="number"
                className="form-control"
                placeholder="Available Quantity"
                value={editData.availableQuantity}
                onChange={(e) =>
                  setEditData({ ...editData, availableQuantity: e.target.value })
                }
              />
              <select
                className="form-control"
                value={editData.inventoryStatus}
                onChange={(e) =>
                  setEditData({ ...editData, inventoryStatus: e.target.value })
                }
              >
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Finished">Finished</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Type"
                value={editData.type}
                onChange={(e) =>
                  setEditData({ ...editData, type: e.target.value })
                }
              />
            </div> */}

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  className="form-control"
                  value={editData.productName}
                  onChange={(e) =>
                    setEditData({ ...editData, productName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="costPrice">Cost Price</label>
                <input
                  type="number"
                  id="costPrice"
                  className="form-control"
                  value={editData.costPrice}
                  onChange={(e) =>
                    setEditData({ ...editData, costPrice: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="sellingPrice">Selling Price</label>
                <input
                  type="number"
                  id="sellingPrice"
                  className="form-control"
                  value={editData.sellingPrice}
                  onChange={(e) =>
                    setEditData({ ...editData, sellingPrice: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="availableQuantity">Available Quantity</label>
                <input
                  type="number"
                  id="availableQuantity"
                  className="form-control"
                  value={editData.availableQuantity}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      availableQuantity: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="inventoryStatus">Inventory Status</label>
                <select
                  id="inventoryStatus"
                  className="form-control"
                  value={editData.inventoryStatus}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      inventoryStatus: e.target.value,
                    })
                  }
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Finished">Finished</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  id="type"
                  className="form-control"
                  value={editData.type}
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateProduct(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => clearEditData({ product })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProduct;
