import {
  getAnOrder,
  deleteAnOrder,
  listOrders,
  createAnOrder
} from "../utils/api";

export const GET_ORDERS = "GET_ORDERS";
export const GET_AN_ORDERS = "GET_AN_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";

export function getOrders(orders) {
  return {
    type: GET_ORDERS,
    orders
  };
}
export function getAOrder(order) {
  return {
    type: GET_AN_ORDERS,
    order
  };
}
export function deleteOrder(orderId) {
  return {
    type: DELETE_ORDER,
    orderId
  };
}

export function handleGetAnOrder(orderId) {
  return dispatch => {
    getAnOrder(orderId).then(order => {
      dispatch(getAOrder(order));
    });
  };
}
export function handleDeleteOrder(orderId) {
  return dispatch => {
    dispatch(deleteOrder(orderId));
    deleteAnOrder(orderId).catch(() => {
      console.log("An error occurred")
    })
  };
}

export function handleGetOrders() {
  return dispatch => {
    listOrders().then(order => {
      dispatch(getOrders(order));
    });
  };
}

export function handleCreateOrder(orderDetails) {
  return dispatch => {
    createAnOrder(orderDetails).then((orderId) => {
      handleGetAnOrder(orderId)
    });
  };
}
