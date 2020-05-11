import {
  DELETE_ORDER,
  GET_AN_ORDERS,
  GET_ORDERS
} from "../actions/orders";

export default function(state = [], action) {
  switch (action.type) {
    case DELETE_ORDER:
      console.log(action.orderId)
      return state.filter(order => order.id !== action.orderId);
    case GET_AN_ORDERS:
      return [...state, ...action.order];
    case GET_ORDERS:
      return [...state, ...action.orders];
    default:
      return state;
  }
}
