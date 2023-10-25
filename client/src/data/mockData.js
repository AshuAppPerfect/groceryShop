// export const mockProductData = [
//     {
//         id: 1,
//         name: "Apples",
//         type: "Fruit",
//         costPrice: 100,  // $1.00
//         sellingPrice: 150,  // $1.50
//         description: "Fresh, crisp apples.",
//         quantity: 100
//     },
//     {
//         id: 2,
//         name: "Bananas",
//         type: "Fruit",
//         costPrice: 75,  // $0.75
//         sellingPrice: 100,  // $1.00
//         description: "Ripe and ready to eat bananas.",
//         quantity: 150
//     },
//     {
//         id: 3,
//         name: "Milk",
//         type: "Dairy",
//         costPrice: 200,  // $2.00
//         sellingPrice: 250,  // $2.50
//         description: "Fresh cow's milk.",
//         quantity: 50
//     },
//     {
//         id: 4,
//         name: "Bread",
//         type: "Bakery",
//         costPrice: 150,  // $1.50
//         sellingPrice: 200,  // $2.00
//         description: "Whole wheat bread.",
//         quantity: 75
//     },
//     {
//         id: 5,
//         name: "Eggs",
//         type: "Dairy",
//         costPrice: 150,  // $1.50
//         sellingPrice: 200,  // $2.00
//         description: "Fresh eggs from local farms.",
//         quantity: 60
//     },
//     {
//         id: 6,
//         name: "Cucumbers",
//         type: "Vegetable",
//         costPrice: 80,  // $0.80
//         sellingPrice: 120,  // $1.20
//         description: "Crisp and green cucumbers.",
//         quantity: 90
//     },
//     {
//         id: 7,
//         name: "Potatoes",
//         type: "Vegetable",
//         costPrice: 50,  // $0.50
//         sellingPrice: 80,  // $0.80
//         description: "Fresh, organic potatoes.",
//         quantity: 70
//     },
//     {
//         id: 8,
//         name: "Chicken Breast",
//         type: "Meat",
//         costPrice: 300,  // $3.00
//         sellingPrice: 400,  // $4.00
//         description: "Boneless, skinless chicken breast.",
//         quantity: 40
//     },
//     {
//         id: 9,
//         name: "Rice",
//         type: "Grains",
//         costPrice: 200,  // $2.00
//         sellingPrice: 250,  // $2.50
//         description: "Long-grain white rice.",
//         quantity: 80
//     },
//     {
//         id: 10,
//         name: "Pasta",
//         type: "Grains",
//         costPrice: 100,  // $1.00
//         sellingPrice: 150,  // $1.50
//         description: "Variety of pasta shapes.",
//         quantity: 120
//     },
//     {
//         id: 11,
//         name: "Tomatoes",
//         type: "Vegetable",
//         costPrice: 90,  // $0.90
//         sellingPrice: 120,  // $1.20
//         description: "Fresh, ripe tomatoes.",
//         quantity: 70
//     },
//     {
//         id: 12,
//         name: "Salmon",
//         type: "Seafood",
//         costPrice: 450,  // $4.50
//         sellingPrice: 600,  // $6.00
//         description: "Wild-caught salmon fillet.",
//         quantity: 30
//     },
//     {
//         id: 13,
//         name: "Yogurt",
//         type: "Dairy",
//         costPrice: 120,  // $1.20
//         sellingPrice: 150,  // $1.50
//         description: "Creamy and delicious yogurt.",
//         quantity: 90
//     },
//     {
//         id: 14,
//         name: "Oranges",
//         type: "Fruit",
//         costPrice: 120,  // $1.20
//         sellingPrice: 160,  // $1.60
//         description: "Juicy and sweet oranges.",
//         quantity: 80
//     },
//     {
//         id: 15,
//         name: "Carrots",
//         type: "Vegetable",
//         costPrice: 60,  // $0.60
//         sellingPrice: 100,  // $1.00
//         description: "Fresh and crunchy carrots.",
//         quantity: 100
//     },
//     {
//         id: 16,
//         name: "Ground Beef",
//         type: "Meat",
//         costPrice: 350,  // $3.50
//         sellingPrice: 450,  // $4.50
//         description: "Lean ground beef.",
//         quantity: 45
//     },
//     {
//         id: 17,
//         name: "Onions",
//         type: "Vegetable",
//         costPrice: 80,  // $0.80
//         sellingPrice: 110,  // $1.10
//         description: "Sweet and aromatic onions.",
//         quantity: 60
//     },
//     {
//         id: 18,
//         name: "Cereal",
//         type: "Breakfast",
//         costPrice: 250,  // $2.50
//         sellingPrice: 300,  // $3.00
//         description: "Variety of breakfast cereals.",
//         quantity: 70
//     },
//     {
//         id: 19,
//         name: "Peanut Butter",
//         type: "Condiments",
//         costPrice: 200,  // $2.00
//         sellingPrice: 250,  // $2.50
//         description: "Creamy peanut butter.",
//         quantity: 60
//     },
//     {
//         id: 20,
//         name: "Mushrooms",
//         type: "Vegetable",
//         costPrice: 120,  // $1.20
//         sellingPrice: 160,  // $1.60
//         description: "Fresh mushrooms for cooking.",
//         quantity: 75
//     },
//     {
//         id: 21,
//         name: "Soda",
//         type: "Beverages",
//         costPrice: 100,  // $1.00
//         sellingPrice: 150,  // $1.50
//         description: "Assorted soft drinks.",
//         quantity: 120
//     },
//     {
//         id: 22,
//         name: "Chocolate",
//         type: "Sweets",
//         costPrice: 75,  // $0.75
//         sellingPrice: 100,  // $1.00
//         description: "Delicious chocolate bars.",
//         quantity: 100
//     },
//     {
//         id: 23,
//         name: "Chips",
//         type: "Snacks",
//         costPrice: 80,  // $0.80
//         sellingPrice: 120,  // $1.20
//         description: "Variety of potato chips.",
//         quantity: 90
//     },
//     {
//         id: 24,
//         name: "Coffee",
//         type: "Beverages",
//         costPrice: 300,  // $3.00
//         sellingPrice: 400,  // $4.00
//         description: "Freshly roasted coffee beans.",
//         quantity: 40
//     },
//     {
//         id: 25,
//         name: "Tea",
//         type: "Beverages",
//         costPrice: 150,  // $1.50
//         sellingPrice: 200,  // $2.00
//         description: "Assorted tea blends.",
//         quantity: 80
//     },
//     {
//         id: 26,
//         name: "Toothpaste",
//         type: "Personal Care",
//         costPrice: 150,  // $1.50
//         sellingPrice: 200,  // $2.00
//         description: "Minty fresh toothpaste.",
//         quantity: 60
//     },
//     {
//         id: 27,
//         name: "Shampoo",
//         type: "Personal Care",
//         costPrice: 250,  // $2.50
//         sellingPrice: 300,  // $3.00
//         description: "Gentle shampoo for all hair types.",
//         quantity: 70
//     },
//     {
//         id: 28,
//         name: "Toilet Paper",
//         type: "Household",
//         costPrice: 200,  // $2.00
//         sellingPrice: 250,  // $2.50
//         description: "Soft and absorbent toilet paper.",
//         quantity: 80
//     },
//     {
//         id: 29,
//         name: "Laundry Detergent",
//         type: "Household",
//         costPrice: 300,  // $3.00
//         sellingPrice: 400,  // $4.00
//         description: "High-quality laundry detergent.",
//         quantity: 50
//     },
//     {
//         id: 30,
//         name: "Bath Soap",
//         type: "Personal Care",
//         costPrice: 100,  // $1.00
//         sellingPrice: 150,  // $1.50
//         description: "Gentle and moisturizing bath soap.",
//         quantity: 120
//     }
// ];

export const mockProductData = [
    {
        id: 1,
        name: "Apples",
        type: "Fruit",
        costPrice: 100,  // $1.00
        sellingPrice: 150,  // $1.50
        description: "Fresh, crisp apples.",
        quantity: 100,
        inventoryStatus: "In Stock"
    },
    {
        id: 2,
        name: "Bananas",
        type: "Fruit",
        costPrice: 75,  // $0.75
        sellingPrice: 100,  // $1.00
        description: "Ripe and ready to eat bananas.",
        quantity: 20,
        inventoryStatus: "Low Stock"
    },
    {
        id: 3,
        name: "Milk",
        type: "Dairy",
        costPrice: 200,  // $2.00
        sellingPrice: 250,  // $2.50
        description: "Fresh cow's milk.",
        quantity: 50,
        inventoryStatus: "In Stock"
    },
    {
        id: 4,
        name: "Bread",
        type: "Bakery",
        costPrice: 150,  // $1.50
        sellingPrice: 200,  // $2.00
        description: "Whole wheat bread.",
        quantity: 10,
        inventoryStatus: "Low Stock"
    },
    {
        id: 5,
        name: "Eggs",
        type: "Dairy",
        costPrice: 150,  // $1.50
        sellingPrice: 200,  // $2.00
        description: "Fresh eggs from local farms.",
        quantity: 60,
        inventoryStatus: "In Stock"
    },
    {
        id: 6,
        name: "Cucumbers",
        type: "Vegetable",
        costPrice: 80,  // $0.80
        sellingPrice: 120,  // $1.20
        description: "Crisp and green cucumbers.",
        quantity: 90,
        inventoryStatus: "In Stock"
    },
    {
        id: 7,
        name: "Potatoes",
        type: "Vegetable",
        costPrice: 50,  // $0.50
        sellingPrice: 80,  // $0.80
        description: "Fresh, organic potatoes.",
        quantity: 70,
        inventoryStatus: "In Stock"
    },
    {
        id: 8,
        name: "Chicken Breast",
        type: "Meat",
        costPrice: 300,  // $3.00
        sellingPrice: 400,  // $4.00
        description: "Boneless, skinless chicken breast.",
        quantity: 40,
        inventoryStatus: "In Stock"
    },
    {
        id: 9,
        name: "Rice",
        type: "Grains",
        costPrice: 200,  // $2.00
        sellingPrice: 250,  // $2.50
        description: "Long-grain white rice.",
        quantity: 80,
        inventoryStatus: "In Stock"
    },
    {
        id: 10,
        name: "Pasta",
        type: "Grains",
        costPrice: 100,  // $1.00
        sellingPrice: 150,  // $1.50
        description: "Variety of pasta shapes.",
        quantity: 120,
        inventoryStatus: "In Stock"
    },
    {
        id: 11,
        name: "Tomatoes",
        type: "Vegetable",
        costPrice: 90,  // $0.90
        sellingPrice: 120,  // $1.20
        description: "Fresh, ripe tomatoes.",
        quantity: 70,
        inventoryStatus: "Low Stock"
    },
    {
        id: 12,
        name: "Salmon",
        type: "Seafood",
        costPrice: 450,  // $4.50
        sellingPrice: 600,  // $6.00
        description: "Wild-caught salmon fillet.",
        quantity: 30,
        inventoryStatus: "In Stock"
    },
    {
        id: 13,
        name: "Yogurt",
        type: "Dairy",
        costPrice: 120,  // $1.20
        sellingPrice: 150,  // $1.50
        description: "Creamy and delicious yogurt.",
        quantity: 90,
        inventoryStatus: "In Stock"
    },
    {
        id: 14,
        name: "Oranges",
        type: "Fruit",
        costPrice: 120,  // $1.20
        sellingPrice: 160,  // $1.60
        description: "Juicy and sweet oranges.",
        quantity: 80,
        inventoryStatus: "In Stock"
    },
    {
        id: 15,
        name: "Carrots",
        type: "Vegetable",
        costPrice: 60,  // $0.60
        sellingPrice: 100,  // $1.00
        description: "Fresh and crunchy carrots.",
        quantity: 100,
        inventoryStatus: "In Stock"
    },
    {
        id: 16,
        name: "Ground Beef",
        type: "Meat",
        costPrice: 350,  // $3.50
        sellingPrice: 450,  // $4.50
        description: "Lean ground beef.",
        quantity: 45,
        inventoryStatus: "In Stock"
    },
    {
        id: 17,
        name: "Onions",
        type: "Vegetable",
        costPrice: 80,  // $0.80
        sellingPrice: 110,  // $1.10
        description: "Sweet and aromatic onions.",
        quantity: 60,
        inventoryStatus: "In Stock"
    },
    {
        id: 18,
        name: "Cereal",
        type: "Breakfast",
        costPrice: 250,  // $2.50
        sellingPrice: 300,  // $3.00
        description: "Variety of breakfast cereals.",
        quantity: 70,
        inventoryStatus: "In Stock"
    },
    {
        id: 19,
        name: "Peanut Butter",
        type: "Condiments",
        costPrice: 200,  // $2.00
        sellingPrice: 250,  // $2.50
        description: "Creamy peanut butter.",
        quantity: 10, // Updated quantity to "Low Stock"
        inventoryStatus: "Low Stock"
    },
    {
        id: 20,
        name: "Mushrooms",
        type: "Vegetable",
        costPrice: 120,  // $1.20
        sellingPrice: 160,  // $1.60
        description: "Fresh mushrooms for cooking.",
        quantity: 75,
        inventoryStatus: "In Stock"
    },
    {
        id: 21,
        name: "Soda",
        type: "Beverages",
        costPrice: 100,  // $1.00
        sellingPrice: 150,  // $1.50
        description: "Assorted soft drinks.",
        quantity: 120,
        inventoryStatus: "Low Stock"
    },
    {
        id: 22,
        name: "Chocolate",
        type: "Sweets",
        costPrice: 75,  // $0.75
        sellingPrice: 100,  // $1.00
        description: "Delicious chocolate bars.",
        quantity: 100,
        inventoryStatus: "In Stock"
    },
    {
        id: 23,
        name: "Chips",
        type: "Snacks",
        costPrice: 80,  // $0.80
        sellingPrice: 120,  // $1.20
        description: "Variety of potato chips.",
        quantity: 90,
        inventoryStatus: "In Stock"
    },
    {
        id: 24,
        name: "Coffee",
        type: "Beverages",
        costPrice: 300,  // $3.00
        sellingPrice: 400,  // $4.00
        description: "Freshly roasted coffee beans.",
        quantity: 40,
        inventoryStatus: "In Stock"
    },
    {
        id: 25,
        name: "Tea",
        type: "Beverages",
        costPrice: 150,  // $1.50
        sellingPrice: 200,  // $2.00
        description: "Assorted tea blends.",
        quantity: 80,
        inventoryStatus: "Low Stock"
    },
    {
        id: 26,
        name: "Toothpaste",
        type: "Personal Care",
        costPrice: 150,  // $1.50
        sellingPrice: 200,  // $2.00
        description: "Minty fresh toothpaste.",
        quantity: 60,
        inventoryStatus: "In Stock"
    },
    {
        id: 27,
        name: "Shampoo",
        type: "Personal Care",
        costPrice: 250,  // $2.50
        sellingPrice: 300,  // $3.00
        description: "Gentle shampoo for all hair types.",
        quantity: 70,
        inventoryStatus: "In Stock"
    },
    {
        id: 28,
        name: "Toilet Paper",
        type: "Household",
        costPrice: 200,  // $2.00
        sellingPrice: 250,  // $2.50
        description: "Soft and absorbent toilet paper.",
        quantity: 80,
        inventoryStatus: "In Stock"
    },
    {
        id: 29,
        name: "Laundry Detergent",
        type: "Household",
        costPrice: 300,  // $3.00
        sellingPrice: 400,  // $4.00
        description: "High-quality laundry detergent.",
        quantity: 50,
        inventoryStatus: "In Stock"
    },
    {
        id: 30,
        name: "Bath Soap",
        type: "Personal Care",
        costPrice: 100,  // $1.00
        sellingPrice: 150,  // $1.50
        description: "Gentle and moisturizing bath soap.",
        quantity: 120,
        inventoryStatus: "In Stock"
    }
];

export const customerData = [
    {
        id: 1,
        name: "Amit Sharma",
        phone: "9876543210",
        email: "amit.sharma@example.com",
        address: "123 Main Street",
        pinCode: "110001",
        totalPurchaseHistory: 1500, // Total purchase history in INR
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-15", // Last purchase date in YYYY-MM-DD format
        orderFrequency: 5
    },
    {
        id: 2,
        name: "Priya Gupta",
        phone: "9988776655",
        email: "priya.gupta@example.com",
        address: "456 Elm Road",
        pinCode: "110002",
        totalPurchaseHistory: 2500,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-18",
        orderFrequency: 8
    },
    {
        id: 3,
        name: "Rahul Verma",
        phone: "7878787878",
        email: "rahul.verma@example.com",
        address: "789 Oak Avenue",
        pinCode: "110003",
        totalPurchaseHistory: 3200,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-21",
        orderFrequency: 4
    },
    {
        id: 4,
        name: "Sneha Reddy",
        phone: "9876541234",
        email: "sneha.reddy@example.com",
        address: "101 Pine Street",
        pinCode: "110004",
        totalPurchaseHistory: 800,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-10",
        orderFrequency: 3
    },
    {
        id: 5,
        name: "Vikram Singh",
        phone: "7654321098",
        email: "vikram.singh@example.com",
        address: "222 Cedar Lane",
        pinCode: "110005",
        totalPurchaseHistory: 2000,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-19",
        orderFrequency: 6
    },
    {
        id: 6,
        name: "Anita Kapoor",
        phone: "8877665544",
        email: "anita.kapoor@example.com",
        address: "789 Maple Drive",
        pinCode: "110006",
        totalPurchaseHistory: 1000,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-22",
        orderFrequency: 7
    },
    {
        id: 7,
        name: "Rajesh Khanna",
        phone: "9988776655",
        email: "rajesh.khanna@example.com",
        address: "444 Birch Street",
        pinCode: "110007",
        totalPurchaseHistory: 2400,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-17",
        orderFrequency: 5
    },
    {
        id: 8,
        name: "Pooja Malhotra",
        phone: "7878787878",
        email: "pooja.malhotra@example.com",
        address: "555 Oak Avenue",
        pinCode: "110008",
        totalPurchaseHistory: 1500,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-14",
        orderFrequency: 2
    },
    {
        id: 9,
        name: "Sachin Sharma",
        phone: "9876541234",
        email: "sachin.sharma@example.com",
        address: "333 Pine Street",
        pinCode: "110009",
        totalPurchaseHistory: 1200,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-20",
        orderFrequency: 4
    },
    {
        id: 10,
        name: "Swati Verma",
        phone: "7654321098",
        email: "swati.verma@example.com",
        address: "666 Cedar Lane",
        pinCode: "110010",
        totalPurchaseHistory: 1800,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-12",
        orderFrequency: 3
    },
    {
        id: 11,
        name: "Ajay Yadav",
        phone: "8877665544",
        email: "ajay.yadav@example.com",
        address: "777 Maple Drive",
        pinCode: "110011",
        totalPurchaseHistory: 900,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-11",
        orderFrequency: 6
    },
    {
        id: 12,
        name: "Preeti Bansal",
        phone: "9988776655",
        email: "preeti.bansal@example.com",
        address: "888 Birch Street",
        pinCode: "110012",
        totalPurchaseHistory: 3500,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-16",
        orderFrequency: 8
    },
    {
        id: 13,
        name: "Rohit Kapoor",
        phone: "7878787878",
        email: "rohit.kapoor@example.com",
        address: "999 Oak Avenue",
        pinCode: "110013",
        totalPurchaseHistory: 2800,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-13",
        orderFrequency: 5
    },
    {
        id: 14,
        name: "Neha Singh",
        phone: "9876541234",
        email: "neha.singh@example.com",
        address: "1010 Pine Street",
        pinCode: "110014",
        totalPurchaseHistory: 600,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-09",
        orderFrequency: 4
    },
    {
        id: 15,
        name: "Vivek Gupta",
        phone: "7654321098",
        email: "vivek.gupta@example.com",
        address: "1212 Cedar Lane",
        pinCode: "110015",
        totalPurchaseHistory: 2200,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-23",
        orderFrequency: 7
    },
    {
        id: 16,
        name: "Anjali Yadav",
        phone: "8877665544",
        email: "anjali.yadav@example.com",
        address: "1313 Maple Drive",
        pinCode: "110016",
        totalPurchaseHistory: 1900,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-24",
        orderFrequency: 5
    },
    {
        id: 17,
        name: "Aryan Verma",
        phone: "9988776655",
        email: "aryan.verma@example.com",
        address: "1414 Birch Street",
        pinCode: "110017",
        totalPurchaseHistory: 3100,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-14",
        orderFrequency: 6
    },
    {
        id: 18,
        name: "Shreya Sharma",
        phone: "7878787878",
        email: "shreya.sharma@example.com",
        address: "1515 Oak Avenue",
        pinCode: "110018",
        totalPurchaseHistory: 1400,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-11",
        orderFrequency: 4
    },
    {
        id: 19,
        name: "Rajeev Kumar",
        phone: "9876541234",
        email: "rajeev.kumar@example.com",
        address: "1616 Pine Street",
        pinCode: "110019",
        totalPurchaseHistory: 800,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-21",
        orderFrequency: 2
    },
    {
        id: 20,
        name: "Nidhi Reddy",
        phone: "7654321098",
        email: "nidhi.reddy@example.com",
        address: "1717 Cedar Lane",
        pinCode: "110020",
        totalPurchaseHistory: 2000,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-20",
        orderFrequency: 3
    },
    {
        id: 21,
        name: "Alok Singh",
        phone: "9988776655",
        email: "alok.singh@example.com",
        address: "1818 Maple Drive",
        pinCode: "110021",
        totalPurchaseHistory: 2200,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-18",
        orderFrequency: 5
    },
    {
        id: 22,
        name: "Sapna Yadav",
        phone: "8877665544",
        email: "sapna.yadav@example.com",
        address: "1919 Birch Street",
        pinCode: "110022",
        totalPurchaseHistory: 2700,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-16",
        orderFrequency: 6
    },
    {
        id: 23,
        name: "Vijay Malhotra",
        phone: "7878787878",
        email: "vijay.malhotra@example.com",
        address: "2020 Oak Avenue",
        pinCode: "110023",
        totalPurchaseHistory: 1100,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-15",
        orderFrequency: 4
    },
    {
        id: 24,
        name: "Suman Reddy",
        phone: "9988776655",
        email: "suman.reddy@example.com",
        address: "2121 Pine Street",
        pinCode: "110024",
        totalPurchaseHistory: 1800,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-13",
        orderFrequency: 3
    },
    {
        id: 25,
        name: "Manoj Kapoor",
        phone: "9876541234",
        email: "manoj.kapoor@example.com",
        address: "2222 Cedar Lane",
        pinCode: "110025",
        totalPurchaseHistory: 1500,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-19",
        orderFrequency: 5
    },
    {
        id: 26,
        name: "Jyoti Sharma",
        phone: "7654321098",
        email: "jyoti.sharma@example.com",
        address: "2323 Maple Drive",
        pinCode: "110026",
        totalPurchaseHistory: 900,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-12",
        orderFrequency: 4
    },
    {
        id: 27,
        name: "Amit Kumar",
        phone: "8877665544",
        email: "amit.kumar@example.com",
        address: "2424 Birch Street",
        pinCode: "110027",
        totalPurchaseHistory: 2600,
        preferredPaymentMethod: "Debit Card",
        lastPurchaseDate: "2023-10-10",
        orderFrequency: 7
    },
    {
        id: 28,
        name: "Meera Verma",
        phone: "9988776655",
        email: "meera.verma@example.com",
        address: "2525 Oak Avenue",
        pinCode: "110028",
        totalPurchaseHistory: 1300,
        preferredPaymentMethod: "UPI",
        lastPurchaseDate: "2023-10-14",
        orderFrequency: 5
    },
    {
        id: 29,
        name: "Ravi Yadav",
        phone: "7878787878",
        email: "ravi.yadav@example.com",
        address: "2626 Pine Street",
        pinCode: "110029",
        totalPurchaseHistory: 1100,
        preferredPaymentMethod: "Credit Card",
        lastPurchaseDate: "2023-10-21",
        orderFrequency: 3
    },
    {
        id: 30,
        name: "Nisha Gupta",
        phone: "9876541234",
        email: "nisha.gupta@example.com",
        address: "2727 Cedar Lane",
        pinCode: "110030",
        totalPurchaseHistory: 1400,
        preferredPaymentMethod: "Cash On Delivery",
        lastPurchaseDate: "2023-10-20",
        orderFrequency: 4
    }
];

export const orderData = [
    {
        "id": 1,
        "orderAmount": 150,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 1, "quantity": 2},
            {"productId": 3, "quantity": 1}
        ],
        "customerId": 1,
        "orderDate": "2023-10-25"
    },
    {
        "id": 2,
        "orderAmount": 200,
        "orderStatus": "filled",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 2, "quantity": 2},
            {"productId": 5, "quantity": 1}
        ],
        "customerId": 2,
        "orderDate": "2023-10-25"
    },
    {
        "id": 3,
        "orderAmount": 600,
        "orderStatus": "filled",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 8, "quantity": 2},
            {"productId": 12, "quantity": 1},
            {"productId": 24, "quantity": 3}
        ],
        "customerId": 3,
        "orderDate": "2023-10-24"
    },
    {
        "id": 4,
        "orderAmount": 450,
        "orderStatus": "pending",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 6, "quantity": 3},
            {"productId": 14, "quantity": 2}
        ],
        "customerId": 4,
        "orderDate": "2023-10-23"
    },
    {
        "id": 5,
        "orderAmount": 350,
        "orderStatus": "partial",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 10, "quantity": 2},
            {"productId": 16, "quantity": 1}
        ],
        "customerId": 5,
        "orderDate": "2023-10-22"
    },
    {
        "id": 6,
        "orderAmount": 250,
        "orderStatus": "filled",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 21, "quantity": 2},
            {"productId": 25, "quantity": 1}
        ],
        "customerId": 6,
        "orderDate": "2023-10-21"
    },
    {
        "id": 7,
        "orderAmount": 420,
        "orderStatus": "filled",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 26, "quantity": 2},
            {"productId": 28, "quantity": 1},
            {"productId": 30, "quantity": 3}
        ],
        "customerId": 7,
        "orderDate": "2023-10-20"
    },
    {
        "id": 8,
        "orderAmount": 260,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 15, "quantity": 4}
        ],
        "customerId": 8,
        "orderDate": "2023-10-19"
    },
    {
        "id": 9,
        "orderAmount": 390,
        "orderStatus": "pending",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 7, "quantity": 5}
        ],
        "customerId": 9,
        "orderDate": "2023-10-18"
    },
    {
        "id": 10,
        "orderAmount": 175,
        "orderStatus": "partial",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 18, "quantity": 2}
        ],
        "customerId": 10,
        "orderDate": "2023-10-17"
    },
    {
        "id": 11,
        "orderAmount": 110,
        "orderStatus": "filled",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 19, "quantity": 2}
        ],
        "customerId": 11,
        "orderDate": "2023-10-16"
    },
    {
        "id": 12,
        "orderAmount": 210,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 9, "quantity": 2},
            {"productId": 11, "quantity": 1}
        ],
        "customerId": 12,
        "orderDate": "2023-10-15"
    },
    {
        "id": 13,
        "orderAmount": 310,
        "orderStatus": "pending",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 22, "quantity": 2},
            {"productId": 24, "quantity": 1}
        ],
        "customerId": 13,
        "orderDate": "2023-10-14"
    },
    {
        "id": 14,
        "orderAmount": 175,
        "orderStatus": "partial",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 17, "quantity": 3}
        ],
        "customerId": 14,
        "orderDate": "2023-10-13"
    },
    {
        "id": 15,
        "orderAmount": 240,
        "orderStatus": "filled",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 20, "quantity": 2},
            {"productId": 23, "quantity": 1}
        ],
        "customerId": 15,
        "orderDate": "2023-10-12"
    },
    {
        "id": 16,
        "orderAmount": 270,
        "orderStatus": "filled",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 27, "quantity": 2},
            {"productId": 29, "quantity": 1}
        ],
        "customerId": 16,
        "orderDate": "2023-10-11"
    },
    {
        "id": 17,
        "orderAmount": 410,
        "orderStatus": "pending",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 3, "quantity": 2},
            {"productId": 6, "quantity": 3}
        ],
        "customerId": 17,
        "orderDate": "2023-10-10"
    },
    {
        "id": 18,
        "orderAmount": 170,
        "orderStatus": "partial",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 12, "quantity": 1}
        ],
        "customerId": 18,
        "orderDate": "2023-10-09"
    },
    {
        "id": 19,
        "orderAmount": 190,
        "orderStatus": "filled",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 14, "quantity": 2}
        ],
        "customerId": 19,
        "orderDate": "2023-10-08"
    },
    {
        "id": 20,
        "orderAmount": 150,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 28, "quantity": 2},
            {"productId": 30, "quantity": 1}
        ],
        "customerId": 20,
        "orderDate": "2023-10-07"
    },
    {
        "id": 21,
        "orderAmount": 300,
        "orderStatus": "pending",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 16, "quantity": 2},
            {"productId": 22, "quantity": 1},
            {"productId": 24, "quantity": 3}
        ],
        "customerId": 21,
        "orderDate": "2023-10-06"
    },
    {
        "id": 22,
        "orderAmount": 190,
        "orderStatus": "partial",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 13, "quantity": 1},
            {"productId": 16, "quantity": 3}
        ],
        "customerId": 22,
        "orderDate": "2023-10-05"
    },
    {
        "id": 23,
        "orderAmount": 240,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 20, "quantity": 2},
            {"productId": 25, "quantity": 1}
        ],
        "customerId": 23,
        "orderDate": "2023-10-04"
    },
    {
        "id": 24,
        "orderAmount": 210,
        "orderStatus": "filled",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 2, "quantity": 2},
            {"productId": 6, "quantity": 1}
        ],
        "customerId": 24,
        "orderDate": "2023-10-03"
    },
    {
        "id": 25,
        "orderAmount": 320,
        "orderStatus": "pending",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 8, "quantity": 2},
            {"productId": 12, "quantity": 1},
            {"productId": 26, "quantity": 3}
        ],
        "customerId": 25,
        "orderDate": "2023-10-02"
    },
    {
        "id": 26,
        "orderAmount": 180,
        "orderStatus": "partial",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 28, "quantity": 2}
        ],
        "customerId": 26,
        "orderDate": "2023-10-01"
    },
    {
        "id": 27,
        "orderAmount": 380,
        "orderStatus": "filled",
        "paymentMethod": "Credit Card",
        "orderItems": [
            {"productId": 29, "quantity": 2},
            {"productId": 30, "quantity": 1}
        ],
        "customerId": 27,
        "orderDate": "2023-09-30"
    },
    {
        "id": 28,
        "orderAmount": 280,
        "orderStatus": "filled",
        "paymentMethod": "Cash On Delivery",
        "orderItems": [
            {"productId": 4, "quantity": 4}
        ],
        "customerId": 28,
        "orderDate": "2023-09-29"
    },
    {
        "id": 29,
        "orderAmount": 350,
        "orderStatus": "pending",
        "paymentMethod": "Debit Card",
        "orderItems": [
            {"productId": 1, "quantity": 2},
            {"productId": 3, "quantity": 1},
            {"productId": 5, "quantity": 2}
        ],
        "customerId": 29,
        "orderDate": "2023-09-28"
    },
    {
        "id": 30,
        "orderAmount": 225,
        "orderStatus": "partial",
        "paymentMethod": "UPI",
        "orderItems": [
            {"productId": 7, "quantity": 2},
            {"productId": 9, "quantity": 1},
            {"productId": 11, "quantity": 2}
        ],
        "customerId": 30,
        "orderDate": "2023-09-27"
    }
];


// export const orderData = [
//     {
//         "orderId": 1,
//         "orderAmount": 150,
//         "orderItems": [
//             {"productId": 1, "quantity": 2},
//             {"productId": 3, "quantity": 1}
//         ],
//         "customerId": 1,
//         "orderDate": "2023-10-25"
//     },
//     {
//         "orderId": 2,
//         "orderAmount": 200,
//         "orderItems": [
//             {"productId": 2, "quantity": 2},
//             {"productId": 5, "quantity": 1}
//         ],
//         "customerId": 2,
//         "orderDate": "2023-10-25"
//     },
//     {
//         "orderId": 3,
//         "orderAmount": 600,
//         "orderItems": [
//             {"productId": 8, "quantity": 2},
//             {"productId": 12, "quantity": 1},
//             {"productId": 24, "quantity": 3}
//         ],
//         "customerId": 3,
//         "orderDate": "2023-10-24"
//     },
//     {
//         "orderId": 4,
//         "orderAmount": 450,
//         "orderItems": [
//             {"productId": 6, "quantity": 3},
//             {"productId": 14, "quantity": 2}
//         ],
//         "customerId": 4,
//         "orderDate": "2023-10-23"
//     },
//     {
//         "orderId": 5,
//         "orderAmount": 350,
//         "orderItems": [
//             {"productId": 10, "quantity": 2},
//             {"productId": 16, "quantity": 1}
//         ],
//         "customerId": 5,
//         "orderDate": "2023-10-22"
//     },
//     {
//         "orderId": 6,
//         "orderAmount": 250,
//         "orderItems": [
//             {"productId": 21, "quantity": 2},
//             {"productId": 25, "quantity": 1}
//         ],
//         "customerId": 6,
//         "orderDate": "2023-10-21"
//     },
//     {
//         "orderId": 7,
//         "orderAmount": 420,
//         "orderItems": [
//             {"productId": 26, "quantity": 2},
//             {"productId": 28, "quantity": 1},
//             {"productId": 30, "quantity": 3}
//         ],
//         "customerId": 7,
//         "orderDate": "2023-10-20"
//     },
//     {
//         "orderId": 8,
//         "orderAmount": 260,
//         "orderItems": [
//             {"productId": 15, "quantity": 4}
//         ],
//         "customerId": 8,
//         "orderDate": "2023-10-19"
//     },
//     {
//         "orderId": 9,
//         "orderAmount": 390,
//         "orderItems": [
//             {"productId": 7, "quantity": 5}
//         ],
//         "customerId": 9,
//         "orderDate": "2023-10-18"
//     },
//     {
//         "orderId": 10,
//         "orderAmount": 175,
//         "orderItems": [
//             {"productId": 18, "quantity": 2}
//         ],
//         "customerId": 10,
//         "orderDate": "2023-10-17"
//     },
//     {
//         "orderId": 11,
//         "orderAmount": 110,
//         "orderItems": [
//             {"productId": 19, "quantity": 2}
//         ],
//         "customerId": 11,
//         "orderDate": "2023-10-16"
//     },
//     {
//         "orderId": 12,
//         "orderAmount": 210,
//         "orderItems": [
//             {"productId": 9, "quantity": 2},
//             {"productId": 11, "quantity": 1}
//         ],
//         "customerId": 12,
//         "orderDate": "2023-10-15"
//     },
//     {
//         "orderId": 13,
//         "orderAmount": 310,
//         "orderItems": [
//             {"productId": 22, "quantity": 2},
//             {"productId": 24, "quantity": 1}
//         ],
//         "customerId": 13,
//         "orderDate": "2023-10-14"
//     },
//     {
//         "orderId": 14,
//         "orderAmount": 175,
//         "orderItems": [
//             {"productId": 17, "quantity": 3}
//         ],
//         "customerId": 14,
//         "orderDate": "2023-10-13"
//     },
//     {
//         "orderId": 15,
//         "orderAmount": 240,
//         "orderItems": [
//             {"productId": 20, "quantity": 2},
//             {"productId": 23, "quantity": 1}
//         ],
//         "customerId": 15,
//         "orderDate": "2023-10-12"
//     },
//     {
//         "orderId": 16,
//         "orderAmount": 270,
//         "orderItems": [
//             {"productId": 27, "quantity": 2},
//             {"productId": 29, "quantity": 1}
//         ],
//         "customerId": 16,
//         "orderDate": "2023-10-11"
//     },
//     {
//         "orderId": 17,
//         "orderAmount": 410,
//         "orderItems": [
//             {"productId": 3, "quantity": 2},
//             {"productId": 5, "quantity": 1},
//             {"productId": 7, "quantity": 3}
//         ],
//         "customerId": 17,
//         "orderDate": "2023-10-10"
//     },
//     {
//         "orderId": 18,
//         "orderAmount": 155,
//         "orderItems": [
//             {"productId": 10, "quantity": 2}
//         ],
//         "customerId": 18,
//         "orderDate": "2023-10-09"
//     },
//     {
//         "orderId": 19,
//         "orderAmount": 400,
//         "orderItems": [
//             {"productId": 30, "quantity": 4}
//         ],
//         "customerId": 19,
//         "orderDate": "2023-10-08"
//     },
//     {
//         "orderId": 20,
//         "orderAmount": 260,
//         "orderItems": [
//             {"productId": 14, "quantity": 2},
//             {"productId": 22, "quantity": 1}
//         ],
//         "customerId": 20,
//         "orderDate": "2023-10-07"
//     },
//     {
//         "orderId": 21,
//         "orderAmount": 150,
//         "orderItems": [
//             {"productId": 17, "quantity": 2}
//         ],
//         "customerId": 21,
//         "orderDate": "2023-10-06"
//     },
//     {
//         "orderId": 22,
//         "orderAmount": 380,
//         "orderItems": [
//             {"productId": 11, "quantity": 2},
//             {"productId": 13, "quantity": 1},
//             {"productId": 16, "quantity": 3}
//         ],
//         "customerId": 22,
//         "orderDate": "2023-10-05"
//     },
//     {
//         "orderId": 23,
//         "orderAmount": 240,
//         "orderItems": [
//             {"productId": 20, "quantity": 2},
//             {"productId": 25, "quantity": 1}
//         ],
//         "customerId": 23,
//         "orderDate": "2023-10-04"
//     },
//     {
//         "orderId": 24,
//         "orderAmount": 210,
//         "orderItems": [
//             {"productId": 2, "quantity": 2},
//             {"productId": 6, "quantity": 1}
//         ],
//         "customerId": 24,
//         "orderDate": "2023-10-03"
//     },
//     {
//         "orderId": 25,
//         "orderAmount": 320,
//         "orderItems": [
//             {"productId": 8, "quantity": 2},
//             {"productId": 12, "quantity": 1},
//             {"productId": 26, "quantity": 3}
//         ],
//         "customerId": 25,
//         "orderDate": "2023-10-02"
//     },
//     {
//         "orderId": 26,
//         "orderAmount": 180,
//         "orderItems": [
//             {"productId": 28, "quantity": 2}
//         ],
//         "customerId": 26,
//         "orderDate": "2023-10-01"
//     },
//     {
//         "orderId": 27,
//         "orderAmount": 380,
//         "orderItems": [
//             {"productId": 29, "quantity": 2},
//             {"productId": 30, "quantity": 1}
//         ],
//         "customerId": 27,
//         "orderDate": "2023-09-30"
//     },
//     {
//         "orderId": 28,
//         "orderAmount": 280,
//         "orderItems": [
//             {"productId": 4, "quantity": 4}
//         ],
//         "customerId": 28,
//         "orderDate": "2023-09-29"
//     },
//     {
//         "orderId": 29,
//         "orderAmount": 350,
//         "orderItems": [
//             {"productId": 1, "quantity": 2},
//             {"productId": 3, "quantity": 1},
//             {"productId": 5, "quantity": 2}
//         ],
//         "customerId": 29,
//         "orderDate": "2023-09-28"
//     },
//     {
//         "orderId": 30,
//         "orderAmount": 225,
//         "orderItems": [
//             {"productId": 7, "quantity": 2},
//             {"productId": 9, "quantity": 1},
//             {"productId": 11, "quantity": 2}
//         ],
//         "customerId": 30,
//         "orderDate": "2023-09-27"
//     }
// ];
