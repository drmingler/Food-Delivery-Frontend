import {
  getFoodItems,
  getAnOrder,
  deleteAnOrder,
  listOrders,
  createAnOrder
} from "./utils/api";

export const ADD_NEW_ORDER = "ADD_NEW_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";

export function getOrders(orders) {
  return {
    type: GET_ORDERS,
    orders
  };
}
export function addNewOrder(newOrder) {
  return {
    type: ADD_NEW_ORDER,
    newOrder
  };
}

export function deleteOrder(orderToDelete) {
  return {
    type: DELETE_ORDER,
    orderToDelete
  };
}
