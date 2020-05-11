const orders =[
    {
        "id": 19,
    "ordered": [
    {
        "id": 29,
        "food_id": "Grilled chicken Salad",
        "quantity": 1,
        "price": 20.0,
        "totalItemPrice": 20.0
    },
    {
        "id": 30,
        "food_id": "Spicy Shrimp Soup",
        "quantity": 1,
        "price": 25.0,
        "totalItemPrice": 25.0
    }
],
    "orderDetail": {
            "id": 17,
        "customerName": "ww",
        "order_type": "Delivery",
        "payment_method": "Card",
        "order_date": "2020-05-10",
        "order_time": "2020-05-10T22:16:08.408078Z"
},
    "total": 45.0
    },
    {
        "id": 6,
        "ordered": [
            {
                "id": 2,
                "food_id": "Grilled chicken Salad",
                "quantity": 1,
                "price": 20.0,
                "totalItemPrice": 20.0
            }
        ],
        "orderDetail": {
            "id": 3,
            "customerName": "Linda",
            "order_type": "Delivery",
            "payment_method": "Card",
            "order_date": "2020-05-09",
            "order_time": "2020-05-09T09:07:13.970524Z"
        },
        "total": 20.0
    },
];

const result = orders.filter((order=>order.id = 19));
console.log(result)