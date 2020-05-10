// Backend urls

const URL = "http://127.0.0.1:8000/api";

export const listFoodUrl = `${URL}/foods/`;
export const eachOrderUrl = orderId => `${URL}/transaction/${orderId}`;
export const listOrderUrl = () => `${URL}/transactions/`;
export const createOrderUrl = () => `${URL}/create/`;
export const deleteOrderUrl = orderId => `${URL}/delete/${orderId}`;
