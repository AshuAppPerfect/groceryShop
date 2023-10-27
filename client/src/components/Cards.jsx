import DisplayCard from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  console.log(props.category);
  console.log(props.products);

  let category = props.category;

  const [addedProduct, setAddedProduct] = useState([]);

  function getProducts() {
    if (category === "All") {
      return props.products;
    } else {
      let filteredProducts = props.products.filter(
        (product) => product.type === category
      );
      return filteredProducts;
    }
  }

  return (
    <div>
      {getProducts().map((product) => {
        return (
          <DisplayCard
            product={product}
            key={props.products.product_id}
            addedProduct={addedProduct}
            setAddedProduct={setAddedProduct}
          />
        );
      })}
    </div>
  );
};

export default Cards;
