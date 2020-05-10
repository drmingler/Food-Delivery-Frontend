// Backend urls

const URL = "http://127.0.0.1:8000/api/";

export const listFood = `${URL}/food`;
export const eachOrder = orderId => `${URL}/transaction/${orderId}`;
export const listOrder = () => `${URL}/transactions`;
export const createOrder = () => `${URL}/create`;
export const deleteOrder = orderId => `${URL}/delete/${orderId}`;
