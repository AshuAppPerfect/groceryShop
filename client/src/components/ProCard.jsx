import React, { useState } from "react";

const ProCard = ( {id, name , type, costPrice, sellingPrice, description, quantity, inventoryStatus,removeProduct}) => {
    
    return (
        <div className="card">
            <img src="../assets/grocery.jpeg" className="image" alt="img"/>
            <div className="productInfo">
                <div className="productDetails"> 
                    <h4 className="productName">{name}</h4> 
                </div>
                <div className="flex flex-row">
                    <h3>CP: {costPrice}</h3>
                    <h3>SP: {sellingPrice}</h3>
                </div>
            </div>
            
            <button className="btn-red" onClick={ () => removeProduct(id)}>
             Delete 
            </button>
        </div>
    )
}
export default ProCard;


// id: 1,
//         name: "Apples",
//         type: "Fruit",
//         costPrice: 100,  // $1.00
//         sellingPrice: 150,  // $1.50
//         description: "Fresh, crisp apples.",
//         quantity: 100,
//         inventoryStatus: "In Stock"
//     },