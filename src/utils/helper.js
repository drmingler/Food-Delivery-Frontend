export const getOrderInfo = (orders, routeId) => {
  const specificOrder =
    orders.length !== 0
      ? orders.filter(eachOrder => eachOrder.id.toString() === routeId)
      : null;
  const result = { ...specificOrder };
  return result[0];
};
