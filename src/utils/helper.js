export const getOrderInfo = (orders, routeId) => {
  const specificOrder =
    orders.length !== 0
      ? orders.filter(eachOrder => eachOrder.id.toString() === routeId)
      : null;
  const result = { ...specificOrder };
  return result[0];
};


export function foodDropDown(foods) {
 return  foods.map(food => ({
    key: food.id,
    text: `${food.food_name} $${food.price}`,
    value: food.id,
  }));
}



export function calculateTotal(array, foodItems) {
  let total = 0;
  array.forEach(number => {
    foodItems.forEach(item => {
      if (item.id === number) {
        total += item.price;
      }
    });
  });
  return total;
}