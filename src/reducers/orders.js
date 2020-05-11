import {
  DELETE_ORDER,
  GET_AN_ORDERS,
  GET_ORDERS,
  ORDER_SUCCESS
} from "../actions/orders";

export default function(state = [], action) {
  switch (action.type) {
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.orderId);
    case GET_AN_ORDERS:
      return [...state, ...action.order];
    case GET_ORDERS:
      return [...state, ...action.orders];
    case ORDER_SUCCESS:
      return [...state, action.order];
    default:
      return state;
  }
}
