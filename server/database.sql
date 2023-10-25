CREATE DATABASE GroceryStore;
CREATE TYPE INVENTORYSTATUSCUSTOM AS ENUM ('In Stock', 'low Stock', 'Finished');
CREATE TYPE ORDERSTATUSCUSTOM AS ENUM ('Pending', 'Filled', 'Partial');
CREATE TYPE PAYMENTMETHODCUSTOM AS ENUM ('Cash', 'UPI', 'Debit Card', 'Credit Card');
CREATE TABLE UserDetails (
    user_id SERIAL PRIMARY KEY,
    userName VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    contact VARCHAR(10) NOT NULL,
    userAddress VARCHAR(50) NOT NULL,
    city VARCHAR(20)
);
CREATE TABLE ProductDetails (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    costPrice INT NOT NULL,
    sellingPrice INT NOT NULL,
    description VARCHAR(50),
    availableQuantity INT NOT NULL,
    inventoryStatus INVENTORYSTATUSCUSTOM DEFAULT ('In Stock'),
    type VARCHAR(30) NOT NULL
);
CREATE TABLE OrderDetails (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    orderStatus ORDERSTATUSCUSTOM DEFAULT ('Pending'),
    orderDate DATE NOT NULL,
    paymentMethod PAYMENTMETHODCUSTOM NOT NULL,
    CONSTRAINT fk_order FOREIGN KEY (user_id) REFERENCES UserDetails(user_id)
);
CREATE TABLE orderProducts (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES ProductDetails(product_id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES OrderDetails(order_id) ON DELETE CASCADE
);