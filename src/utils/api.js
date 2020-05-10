// All api calls are made here

import {
  listFoodUrl,
  createOrderUrl,
  deleteOrderUrl,
  listOrderUrl,
  eachOrderUrl
} from "./constants";

const headers = {
  Accept: "application/json"
};

// Get all food items
export const getFoodItems = () => {
  return fetch(listFoodUrl, { method: "GET", headers }).then(response =>
    response.json()
  );
};

// Get a specific transaction
export const getAnOrder = orderId => {
  return fetch(eachOrderUrl(orderId), {
    method: "GET",
    headers
  }).then(response => response.json());
};

// Get a list of  transactions
export const listOrders = () => {
  return fetch(listOrderUrl(), {
    method: "GET",
    headers
  }).then(response => response.json());
};

// Get a delete a transaction
export const deleteAnOrder = orderId => {
  return fetch(deleteOrderUrl(orderId), {
    method: "DELETE",
    headers
  }).then(response => response);
};

// Get a specific transaction
export const createAnOrder = (orderDetails) => {
  return fetch(createOrderUrl(), {
    method: "POST",
    headers:{
      ...headers,
      'content-Type' : 'application/json'
    },
    body : JSON.stringify(orderDetails)
  }).then(response => response.json());
};


// createAnOrder({
//   user_name: "Sharon",
//   first_name: "Wine",
//   last_name: "Dassah",
//   phone_number: "+234706443",
//   street: "Arkad ut",
//   postal_code: "7694",
//   foods: [2, 1]
// }).then(data => console.log(data));