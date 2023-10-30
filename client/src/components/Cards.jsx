import DisplayCard from "./Card";
import React, { useState } from "react";

const Cards = ({products, category, handleAddToCart}) => {
  //console.log(props.category);
  //console.log(props.products);

  //let category = props.category;

  //const [addedProduct, setAddedProduct] = useState([]);

  function getProducts() {
    if (category === "All") {
      return products;
    } else {
      let filteredProducts = products.filter(
        (product) => product.type === category
      );
      return filteredProducts;
    }
  }

  return (
    <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
      {getProducts().map((product) => {
        return (
          <DisplayCard
            product={product}
            key={product.product_id}
            handleAddToCart={handleAddToCart}
            //addedProduct={addedProduct}
            //setAddedProduct={setAddedProduct}
          />
        );
      })}
    </div>
  );
};

export default Cards;
