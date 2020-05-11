import { getFoodItems } from "../utils/api";

export const GET_FOODS = "GET_FOODS";
export function getFoods(foods) {
  return {
    type: GET_FOODS,
    foods
  };
}

export function handleGetFoods() {
  return dispatch => {
    getFoodItems().then(foods => {
      dispatch(getFoods(foods));
    });
  };
}
